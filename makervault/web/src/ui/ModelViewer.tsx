import React, { useEffect, useRef } from "react";
import * as THREE from "three";

type ModelViewerProps = { url: string; ext: string };

export default function ModelViewer({ url, ext }: ModelViewerProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let disposed = false;
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(mount.clientWidth || 300, mount.clientHeight || 300);
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1));
    camera.position.set(1, 1, 3);

    let controls: any;
    let teardown: (() => void) | undefined;

    (async () => {
      try {
        const { OrbitControls } = await import(
          "three/examples/jsm/controls/OrbitControls.js"
        );
        controls = new OrbitControls(camera, renderer.domElement);

        const addMesh = (geom: THREE.BufferGeometry) => {
          if (disposed) return;
          geom.computeBoundingSphere();
          const mesh = new THREE.Mesh(
            geom,
            new THREE.MeshStandardMaterial({ metalness: 0.2, roughness: 0.8, color: 0xdddddd })
          );
          scene.add(mesh);

          const bs = geom.boundingSphere!;
          camera.position.set(
            bs.center.x + bs.radius * 1.8,
            bs.center.y + bs.radius * 1.2,
            bs.center.z + bs.radius * 1.8
          );
          camera.lookAt(bs.center);
          controls?.update();
        };

        const e = (ext || "").toLowerCase();

        if (e === "stl") {
          const { STLLoader } = await import("three/examples/jsm/loaders/STLLoader.js");
          new STLLoader().load(url, addMesh);
        } else if (e === "3mf") {
          const { ThreeMFLoader } = await import("three/examples/jsm/loaders/3MFLoader.js");
          new ThreeMFLoader().load(url, (group: THREE.Group) => {
            if (!disposed) scene.add(group);
          });
        } else if (e === "step" || e === "stp") {
          try {
            const initOcct = (await import("occt-import-js")).default; // WASM init fn
            const resp = await fetch(url);
            const buf = new Uint8Array(await resp.arrayBuffer());
            const occt = await initOcct();
            const res = await occt.readStepFile(buf); // { meshes: [...] }

            const positions: number[] = [];
            for (const m of res.meshes) {
              // @ts-ignore runtime attribute
              positions.push(...m.attributes.position.array);
            }
            const geom = new THREE.BufferGeometry();
            geom.setAttribute(
              "position",
              new THREE.Float32BufferAttribute(new Float32Array(positions), 3)
            );
            addMesh(geom);
          } catch (err) {
            console.error("STEP preview failed:", err);
          }
        }
      } catch (err) {
        console.error("Viewer init failed:", err);
      }

      const onResize = () => {
        if (!mount) return;
        const w = mount.clientWidth || 300;
        const h = mount.clientHeight || 300;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("resize", onResize);
      teardown = () => window.removeEventListener("resize", onResize);

      const animate = () => {
        if (disposed) return;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };
      animate();
    })();

    return () => {
      disposed = true;
      try {
        teardown?.();
        mount.removeChild(renderer.domElement);
      } catch {}
      renderer.dispose();
    };
  }, [url, ext]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full bg-neutral-100 dark:bg-neutral-900 rounded-md overflow-hidden"
    />
  );
}
