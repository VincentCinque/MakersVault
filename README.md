
<img width="1024" height="1024" alt="whitelogo" src="https://github.com/user-attachments/assets/22e86a97-05e2-44d7-815c-fb004957f5d2" />

<h1>Makers Vault</h1>
<p>Makers Vault is a home for all your 3D print files and creative images/illustrations. Tired of having basic folders on your desktop just full of 3D print files with inconsistent names when you download them? Tired of having to load a 3D print file into your slicer just to see what it is? Look no further. Create folders, tag your files, and preview them in 3D from within your browser. Makers Vault is fully self-hostable using Docker and browser-based for ease of use and deployment.</p>
<h2>Makers Vault Home Screen</h2>
<img width="1902" height="882" alt="image" src="https://github.com/user-attachments/assets/2ac2f74c-481c-4bde-94ad-3c37cb95f400" />

<h2>Getting Started</h2>
<p>Makers Vault is deployable using Docker pull or docker compose:</p>
<h3>Docker Compose</h3>

```yaml
version: "3.9"

services:
  api:
    image: ${API_IMAGE:-shotgunwilly555/makersvault-api:v1}
    restart: unless-stopped
    environment:
      - AUTH_USERNAME=${AUTH_USERNAME:-admin}
      - AUTH_PASSWORD=${AUTH_PASSWORD:-super-secret}
      - AUTH_SECRET=${AUTH_SECRET:-changeme-secret}
      - AUTH_TOKEN_TTL=${AUTH_TOKEN_TTL:-43200}
      - FILE_STORAGE=/app/storage
      - DB_URL=sqlite:////app/data/app.db
      - CORS_ORIGINS=${CORS_ORIGINS:-http://localhost:5173}
    volumes:
      - makersvault_storage:/app/storage
      - makersvault_db:/app/data
    ports:
      - "8000:8000"

  web:
    image: ${WEB_IMAGE:-shotgunwilly555/makersvault-web:v1}
    restart: unless-stopped
    environment:
      - VITE_API_URL=${VITE_API_URL:-http://localhost:8000}
    ports:
      - "5173:5173"
    depends_on:
      - api

volumes:
  makersvault_storage:
  makersvault_db:
```

<h3>Docker Pull</h3>

```bash
docker pull shotgunwilly555/makersvault-api:v1
docker pull shotgunwilly555/makersvault-web:v1

docker run -d --name mv-api -p 8000:8000 \
  -e AUTH_USERNAME=admin -e AUTH_PASSWORD=super-secret \
  shotgunwilly555/makersvault-api:v1
docker run -d --name mv-web -p 5173:5173 \
  -e VITE_API_URL=http://localhost:8000 \
  shotgunwilly555/makersvault-web:v1

```
<p></p>
<h2>Contributing</h2>
<p>Contributions are always welcome, wether it be bug fixes or feature improvments. Any large changes, please start a disscussion first!</p>
<h2>Feature Requests and Bug Reporting</h2>
<p>For bug fixes or feature improvment requests please either open an issue or start a discussion thread.</p>

<h2>Features, UI Walkthrough and Supported File Types</h2>
  <h3>Supported File Types</h3>
<p>The file types that Makers Vault will accept are:</p>
<h3>3D Print Files: </h3>
<ul>
  <li>STL</li>
  <li>STEP</li>
  <li>OBJ</li>
  <li>3MF</li>
  <li>STP</li>
</ul>
<h3>Image Types: </h3>
<ul>
  <li>SVG</li>
  <li>PNG</li>
  <li>JPG</li>
  <li>WEBP</li>
  <li>BMP</li>
</ul>
<h3>Other File Types</h3>
<p>Most other file types are supported (docx, ppt, pdf, zip etc.), however these file types will not render a preview. The application is mainly made to support files that would be used for 3D printing, CAD, and artistic illuistrations. There are other projects out there that are hyperfocused on simply storing documents, those are recommended in place of Makers Vault to keep this focused and efficent at one task. If that feature is sought after please feel free to make a discussion.</p>
<h3>Feature List</h3>
<p>Makers Vault is intentionally kept simplistic to serve one purpouse and remain user-friendly while still remaining feature rich for the purpouse it servers:</p>
<ul>
  <li>The ability to create and delete folders.</li>
  <li>Tag any and all documents uploaded to Makers Vault.</li>
  <li>Sort, search, and rename any document uploaded.</li>
  <li>Add notes to documents uploaded.</li>
  <li>Toggle between light and dark mode for a better viewing experience if a print or SVG is black and needs to be viewed on a light darkground or vise versa.</li>
  <li>Create a username and password for added security if it is running behind a reverse proxy.</li>
  <li>Move or delete files from within the application.</li>
</ul>
<h2>UI and Feature Walkthrough</h2>
<p>Note: For initial install and setup instructions refer to the Getting Started section.</p>
