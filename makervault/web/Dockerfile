FROM node:20-alpine
WORKDIR /app

# Install deps first for better layer caching
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# Copy source
COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
