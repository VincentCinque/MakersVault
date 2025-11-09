import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import occtWasmUrl from "occt-import-js/dist/occt-import-js.wasm?url";
import occtWorkerUrl from "occt-import-js/dist/occt-import-js-worker.js?url";

type ModelViewerProps = { url: string; ext: string; assetId?: string };

export default function ModelViewer({ url, ext, assetId }: ModelViewerProps) {
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

    scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1.6));
    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const dir1 = new THREE.DirectionalLight(0xffffff, 1.4);
    dir1.position.set(3, 6, 2);
    const dir2 = new THREE.DirectionalLight(0xffffff, 1.2);
    dir2.position.set(-4, -2, 3);
    scene.add(dir1);
    scene.add(dir2);
    camera.position.set(1, 1, 3);

    let controls: any;
    let teardown: (() => void) | undefined;
    const storageKey = assetId ? `mv-view-${assetId}` : null;

    const loadSavedView = () => {
      if (!storageKey || typeof window === "undefined") return false;
      try {
        const raw = window.localStorage.getItem(storageKey);
        if (!raw) return false;
        const data = JSON.parse(raw);
        if (!Array.isArray(data?.position) || !Array.isArray(data?.target)) return false;
        camera.position.fromArray(data.position);
        controls?.target.fromArray(data.target);
        controls?.update();
        return true;
      } catch (err) {
        console.warn("Failed to load saved view", err);
        return false;
      }
    };

    const saveView = () => {
      if (!storageKey || typeof window === "undefined" || !controls) return;
      try {
        const payload = {
          position: camera.position.toArray(),
          target: controls.target.toArray(),
        };
        window.localStorage.setItem(storageKey, JSON.stringify(payload));
      } catch {}
    };

    (async () => {
      try {
        const { OrbitControls } = await import(
          "three/examples/jsm/controls/OrbitControls.js"
        );
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enablePan = true;
        controls.target.set(0, 0, 0);
        controls.addEventListener("change", saveView);

        const centerSceneOn = (box: THREE.Box3) => {
          const size = box.getSize(new THREE.Vector3());
          const center = box.getCenter(new THREE.Vector3());
          const radius = Math.max(size.x, size.y, size.z) || 1;
          if (!loadSavedView()) {
            camera.position.copy(center).add(new THREE.Vector3(radius * 1.8, radius * 1.2, radius * 1.8));
            camera.lookAt(center);
            controls?.target.copy(center);
            controls?.update();
          }
        };

        const addMesh = (geom: THREE.BufferGeometry) => {
          if (disposed) return;
          geom.computeBoundingSphere();
          const mesh = new THREE.Mesh(
            geom,
            new THREE.MeshStandardMaterial({ metalness: 0.2, roughness: 0.8, color: 0xdddddd })
          );
          scene.add(mesh);

          const bs = geom.boundingSphere!;
          centerSceneOn(new THREE.Box3().setFromCenterAndSize(bs.center, new THREE.Vector3(bs.radius * 2, bs.radius * 2, bs.radius * 2)));
        };

        const e = (ext || "").toLowerCase();

        if (e === "stl") {
          const { STLLoader } = await import("three/examples/jsm/loaders/STLLoader.js");
          new STLLoader().load(url, geometry => {
            geometry.computeBoundingBox();
            const box = geometry.boundingBox ?? new THREE.Box3();
            const center = box.getCenter(new THREE.Vector3());
            geometry.translate(-center.x, -center.y, -center.z);
            addMesh(geometry);
            centerSceneOn(box);
          });
        } else if (e === "3mf") {
          const { ThreeMFLoader } = await import("three/examples/jsm/loaders/3MFLoader.js");
          new ThreeMFLoader().load(url, (group: THREE.Group) => {
            if (disposed) return;
            scene.add(group);
            const box = new THREE.Box3().setFromObject(group);
            centerSceneOn(box);
          });
        } else if (e === "step" || e === "stp") {
          try {
            type OcctMesh = {
              color?: [number, number, number];
              attributes: {
                position?: { array: ArrayLike<number> };
                normal?: { array: ArrayLike<number> };
              };
              index?: { array: ArrayLike<number> };
            };

            const initOcct = (await import("occt-import-js")).default; // WASM init fn
            const resp = await fetch(url);
            const buf = new Uint8Array(await resp.arrayBuffer());
            const occt = await initOcct({
              locateFile: (file: string) => {
                if (file.endsWith(".wasm")) return occtWasmUrl;
                if (file.endsWith(".worker.js")) return occtWorkerUrl;
                return file;
              },
            });
            const res = await occt.ReadStepFile(buf, null);

            const group = new THREE.Group();
            for (const m of res.meshes as OcctMesh[]) {
              const pos = m.attributes?.position?.array;
              if (!pos || !pos.length) continue;

              const geom = new THREE.BufferGeometry();
              const toFloat32 = (data: ArrayLike<number>) => Float32Array.from(data);

              geom.setAttribute(
                "position",
                new THREE.Float32BufferAttribute(toFloat32(pos), 3)
              );

              const normals = m.attributes?.normal?.array;
              if (normals && normals.length) {
                geom.setAttribute(
                  "normal",
                  new THREE.Float32BufferAttribute(toFloat32(normals), 3)
                );
              }

              const indices = m.index?.array;
              if (indices && indices.length) {
                geom.setIndex(
                  Array.isArray(indices) ? indices : Array.from(indices as ArrayLike<number>)
                );
              } else {
                geom.computeVertexNormals();
              }
              geom.computeBoundingSphere();

              const color = m.color
                ? new THREE.Color(m.color[0] / 255, m.color[1] / 255, m.color[2] / 255)
                : new THREE.Color(0xf1f5f9);
              const mesh = new THREE.Mesh(
                geom,
                new THREE.MeshStandardMaterial({ color, metalness: 0.2, roughness: 0.8 })
              );
              group.add(mesh);
            }

            if (group.children.length) {
              scene.add(group);
              centerSceneOn(new THREE.Box3().setFromObject(group));
            } else {
              console.warn("STEP preview produced no meshes");
            }
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
      try {
        controls?.removeEventListener("change", saveView);
        controls?.dispose();
      } catch {}
      renderer.dispose();
    };
  }, [url, ext, assetId]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full bg-neutral-100 dark:bg-neutral-900 rounded-md overflow-hidden"
    />
  );
}
