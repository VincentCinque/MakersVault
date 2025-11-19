
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
<h3>Setting up the .env file</h3>
<p>Setting up the .env file is important to define some variables in the container. This file should be placed in the same folder as the docker-compose.yaml file and named ".env". An example of the .env file is:</p>

```yaml
FILE_STORAGE=/app/storage
DB_URL=sqlite:///./app.db
CORS_ORIGINS=http://localhost:5173
VITE_API_URL=http://localhost:8000
AUTH_USERNAME=admin
AUTH_PASSWORD=super-secret
AUTH_SECRET=replace-with-random-secret
AUTH_TOKEN_TTL=43200
```
<p>If you plan to run the Docker container on anything other than your local machine, you will need to update the .env file appropriatley for example if your running it on a Linux server or behind a reverse proxy with a domain name:</p>
<p>**NOTE**: If you run Makers Vault on anything but the local machine you must change CORS_ORIGINS and VITE_API_URL to the appropriate address or else you may get a "failure to fetch" error when logging in. </p>

```yaml
FILE_STORAGE=/app/storage
DB_URL=sqlite:///./app.db
CORS_ORIGINS=http://10.0.0.160:5173 #10.0.0.160 is just an example, use the actual IPv4 address of your server.
VITE_API_URL=http://10.0.0.160:8000 #alternativley both CORS_ORIGIN and VITE_API_URL can be set to something like https://makersvault-local.duckdns.org if running behind a proxy.
AUTH_USERNAME=admin #default username
AUTH_PASSWORD=super-secret #default password
AUTH_SECRET=replace-with-random-secret #recommended to use a generated password (random string), using a password manager. 
AUTH_TOKEN_TTL=43200
```
<p>By default the username and password will be defined in the .env file - it is recommended to change these credentials to something different. All other variables set in the .env are up to user preference.</p>
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
<p>**NOTE**: For initial install and setup instructions refer to the Getting Started section.</p>
<h3>Logging in for the First Time</h3>
<img width="1911" height="946" alt="image" src="https://github.com/user-attachments/assets/2c53c4f9-dbb2-4796-a80e-95dbbf62b3dc" />
<p>Login utilizing the default password set in the .env file, or a custom one if set (recommended).</p>
<h3>Landing Page/All Items</h3>
<img width="1914" height="944" alt="image" src="https://github.com/user-attachments/assets/2a46a29f-0a3a-4281-b702-fbd8967698a6" />
<p>Since 3D print previews may be colored differntly (black, white, red etc.), to make them more easily viewable utilize the Theme selector in the top right to toggle back and forth between light and dark mode. </p>
<img width="1908" height="938" alt="image" src="https://github.com/user-attachments/assets/c8b41985-0fe7-4a5a-8d47-24d5895e23f4" />
<h3>Uploading Files</h3>
<p>Makers Vault supports single file upload and batch file upload. To upload a file click the Upload button near the top right hand corner of the screen.</p>
<img width="1901" height="932" alt="image" src="https://github.com/user-attachments/assets/fc40995c-81d2-4af2-a380-b3d85a0608bf" />
<p>**NOTE**: Depending on how many files/the size of the files, it can take some time to upload as well as render the 3D preview. Please be patient.</p>
<img width="1892" height="932" alt="image" src="https://github.com/user-attachments/assets/461aefda-dbe0-4c39-99f0-32c974674c6b" />
<p>Makers Vault utilizes a static 3D preview in the tiles in each folder, this is to prevent slow load times and potential issues caused by a large number of 3D renderings being loaded at once. To view a full 3D rendering of a specific file, double clicking on the tile will open a pop up window with a full 3D interactable render of the file. To utilize the interactive 3D render in the pop-up window, you can simply click with your mouse and rotate it as you please.</p>
<img width="1910" height="934" alt="image" src="https://github.com/user-attachments/assets/0c464fa1-2b94-4ca5-965d-af49cd0c8a38" />
<p>Individual files can be re-named by double clicking on the Name field in each tile. The file extension (stl, step, 3mf, etc.) will be preserved even if removed in the renaming process. </p>
<img width="320" height="426" alt="image" src="https://github.com/user-attachments/assets/c711b258-f726-4a93-9950-09dd2261de59" />
<h3>Tagging Files and Adding to Folders</h3>
<p>To begin organizing files first start by clicking "New" in the top left corner. This will prompt you to create a new folder.</p>
<img width="1898" height="940" alt="image" src="https://github.com/user-attachments/assets/731e596f-9eee-4911-b9b8-1d495faeb393" />
<p>Once a new folder is created, you can begin to assign the files to the folder by utilizing the drop down menu within the individual files tile. Alternativley you can click on the folder and select upload at which point the uploaded file will by default be placed within that specific folder. </p>
<img width="1890" height="935" alt="image" src="https://github.com/user-attachments/assets/8394c035-8554-4a3c-a33a-2b12c1015d0d" />
<img width="1896" height="943" alt="image" src="https://github.com/user-attachments/assets/177a74f4-19c1-409c-974e-e5a4f64f5d01" />
<img width="1909" height="927" alt="image" src="https://github.com/user-attachments/assets/609ff28c-dc4e-4c43-93ad-452d33e2a347" />












