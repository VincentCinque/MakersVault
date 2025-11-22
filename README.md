
<img width="1024" height="1024" alt="whitelogo" src="https://github.com/user-attachments/assets/22e86a97-05e2-44d7-815c-fb004957f5d2" /> 
<h1>Makers Vault</h1>
<p>Makers Vault is a home for all your 3D print files and creative images/illustrations. Tired of having basic folders on your desktop filled with 3D print files with inconsistent names? Tired of having to load a 3D print file into your slicer just to see what it is? Look no further. Create folders, tag your files, and preview them in 3D directly in your browser. Makers Vault is fully self-hostable using Docker and accessible through your web browser for ease of use and deployment.</p> <h2>Makers Vault Home Screen</h2> <img width="1902" height="882" alt="image" src="https://github.com/user-attachments/assets/2ac2f74c-481c-4bde-94ad-3c37cb95f400" /> <h2>Getting Started</h2> <p>Makers Vault is deployable using Docker pull or Docker Compose:</p>
<h3>Docker Compose</h3>

```yaml
version: "3.9"

services:
  api:
    image: ${API_IMAGE:-shotgunwilly555/makersvault-api:latest}
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
    image: ${WEB_IMAGE:-shotgunwilly555/makersvault-web:latest}
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

```yaml
docker pull shotgunwilly555/makersvault-api:latest
docker pull shotgunwilly555/makersvault-web:latest

docker run -d --name mv-api -p 8000:8000 \
  -e AUTH_USERNAME=admin -e AUTH_PASSWORD=super-secret \
  shotgunwilly555/makersvault-api:latest

docker run -d --name mv-web -p 5173:5173 \
  -e VITE_API_URL=http://localhost:8000 \
  shotgunwilly555/makersvault-web:latest

```

<h3>Setting up the .env file</h3> <p>Setting up the .env file is important to define your environment variables. This file should be placed in the same folder as the docker-compose.yml file and named <strong>.env</strong>. An example .env file is shown below:</p>

```yaml
API_IMAGE=shotgunwilly555/makersvault-api:latest
WEB_IMAGE=shotgunwilly555/makersvault-web:latest
FILE_STORAGE=/app/storage
DB_URL=sqlite:///./app.db
CORS_ORIGINS=http://localhost:5173
VITE_API_URL=http://localhost:8000
AUTH_USERNAME=admin
AUTH_PASSWORD=super-secret
AUTH_SECRET=replace-with-random-secret
AUTH_TOKEN_TTL=43200
```

<p>If you plan to run the Docker container on anything other than your local machine, you must update the .env file accordingly. For example, if you are running Makers Vault on a Linux server or behind a reverse proxy with a domain name:</p> <p><strong>NOTE:</strong> If you run Makers Vault on anything other than the local machine, you must change <code>CORS_ORIGINS</code> and <code>VITE_API_URL</code> to the appropriate address, or you may receive a “failure to fetch” error when logging in.</p>

```yaml
API_IMAGE=shotgunwilly555/makersvault-api:latest
WEB_IMAGE=shotgunwilly555/makersvault-web:latest
FILE_STORAGE=/app/storage
DB_URL=sqlite:///./app.db
CORS_ORIGINS=http://10.0.0.160:5173  # example - use your server's actual IP
VITE_API_URL=http://10.0.0.160:8000  # or use https://makersvault-local.duckdns.org when behind a proxy
AUTH_USERNAME=admin
AUTH_PASSWORD=super-secret
AUTH_SECRET=replace-with-random-secret  # recommended to use a random generated string
AUTH_TOKEN_TTL=43200
```
<p>By default, the username and password will be defined in the .env file — it is recommended to change these credentials. All other variables can be modified based on user preference. When mapping ports in the docker-compose file, ensure the ports match the values set in the .env file.</p>
<h2>Contributing</h2> 
<p>Contributions are always welcome, whether it be bug fixes or feature improvements. For large changes, please open a discussion first!</p> <h2>Feature Requests and Bug Reporting</h2> <p>For bug reports or feature improvement requests, please open an issue or start a discussion thread.</p> 
<h2>Features, UI Walkthrough, and Supported File Types</h2> 
<h3>Supported File Types</h3> <p>Makers Vault supports the following file types:</p>
<h3>3D Print Files:</h3> 
<ul> 
  <li>STL</li> 
  <li>STEP</li> 
  <li>OBJ</li> 
  <li>3MF</li> 
  <li>STP</li> 
</ul> 
<h3>Image Types:</h3> 
<ul> 
  <li>SVG</li> 
  <li>PNG</li> 
  <li>JPG</li> 
  <li>WEBP</li> 
  <li>BMP</li> 
</ul> 
<h3>Other File Types</h3>
<p>Most other file types (docx, ppt, pdf, zip, etc.) are supported, but they will not render a preview. Makers Vault is mainly designed for 3D printing files, CAD, and artistic illustrations. If you need a document-focused solution, other tools may be more suitable. That said, feel free to request features if needed!</p> <h3>Feature List</h3> 
<p>Makers Vault is intentionally kept simple to remain user-friendly while still being feature-rich for its purpose:</p> 
<ul> 
  <li>Create and delete folders.</li> 
  <li>Tag any document uploaded to Makers Vault.</li>
  <li>Sort, search, and rename documents.</li>
  <li>Add notes to documents.</li>
  <li>Toggle between light and dark mode for better viewing of differently colored 3D models.</li>
  <li>Create username and password for added security when running behind a reverse proxy.</li>
  <li>Move or delete files from within the application.</li>
</ul> 
<h2>UI and Feature Walkthrough</h2>
<p><strong>NOTE:</strong> For initial install instructions refer to the Getting Started section.</p>
<h3>Logging in for the First Time</h3> 
<img width="1911" height="946" alt="image" src="https://github.com/user-attachments/assets/2c53c4f9-dbb2-4796-a80e-95dbbf62b3dc" />
<p>Log in using the default password set in the .env file, or a custom password if configured (recommended).</p>
<h3>Landing Page / All Items</h3> 
<img width="1914" height="944" alt="image" src="https://github.com/user-attachments/assets/2a46a29f-0a3a-4281-b702-fbd8967698a6" /> 
<p>Since 3D print previews may be different colors (black, white, red, etc.), use the theme selector in the top right corner to switch between light and dark mode for better visibility.</p>
<img width="1908" height="938" alt="image" src="https://github.com/user-attachments/assets/c8b41985-0fe7-4a5a-8d47-24d5895e23f4" /> 
<h3>Uploading Files</h3>
<p>Makers Vault supports both single-file and batch uploads. To upload a file, click the Upload button in the top-right corner.</p> 
<img width="1901" height="932" alt="image" src="https://github.com/user-attachments/assets/fc40995c-81d2-4af2-a380-b3d85a0608bf" />
<p><strong>NOTE:</strong> Depending on the number and size of the files, upload and preview generation may take some time. Please be patient.</p> 
<img width="1892" height="932" alt="image" src="https://github.com/user-attachments/assets/461aefda-dbe0-4c39-99f0-32c974674c6b" /> 
<p>Makers Vault uses static 3D preview images in each tile to keep folder browsing fast. To view a fully interactive 3D preview, double-click the tile. In the pop-up window, you can rotate and inspect the 3D model interactively.</p>
<img width="1910" height="934" alt="image" src="https://github.com/user-attachments/assets/0c464fa1-2b94-4ca5-965d-af49cd0c8a38" />
<p>Individual files can be renamed by double-clicking the Name field. The file extension (STL, STEP, 3MF, etc.) will be preserved even if removed by mistake.</p>
<img width="320" height="426" alt="image" src="https://github.com/user-attachments/assets/c711b258-f726-4a93-9950-09dd2261de59" /> 
<h3>Tagging Files and Adding to Folders</h3> 
<p>To begin organizing files, click “New” at the top left to create a new folder.</p> 
<img width="1898" height="940" alt="image" src="https://github.com/user-attachments/assets/731e596f-9eee-4911-b9b8-1d495faeb393" /> 
<p>After creating a folder, assign files to it using the dropdown menu in each file tile. Alternatively, click the folder and then upload files directly — uploaded files will automatically be placed in the current folder.</p>
<img width="1890" height="935" alt="image" src="https://github.com/user-attachments/assets/8394c035-8554-4a3c-a33a-2b12c1015d0d" /> 
<img width="1896" height="943" alt="image" src="https://github.com/user-attachments/assets/177a74f4-19c1-409c-974e-e5a4f64f5d01" /> 
<img width="1909" height="927" alt="image" src="https://github.com/user-attachments/assets/609ff28c-dc4e-4c43-93ad-452d33e2a347" /> 
<p>When entering tags, typing a comma will close the current tag and allow you to enter the next. Example: typing “3D Print,” will create a tag named “3D Print”.
</p> <img width="1896" height="940" alt="image" src="https://github.com/user-attachments/assets/67ab01c9-1fd4-4a32-9613-7e36d978f245" /> 
<p>To sort by tags, click the matching tag tab at the top of the page. The sorting dropdown next to the search bar allows sorting by name, size, file type, and folder.</p>
<img width="1911" height="939" alt="image" src="https://github.com/user-attachments/assets/ead40d63-b019-4f99-8daa-79c488b535c3" /> <img width="1912" height="925" alt="image" src="https://github.com/user-attachments/assets/8bf49efc-a110-4122-8669-6c8cbde4b6cf" />
