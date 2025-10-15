########################
# Builder - install deps and build Vite app
########################
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm ci

# Copy the rest of the source and build
COPY . .
RUN npm run build

########################
# Runtime - Nginx to serve static files
########################
FROM nginx:alpine AS runtime

# Remove default config and add SPA-friendly routing
RUN rm -f /etc/nginx/conf.d/default.conf

# Write a minimal nginx config supporting history API fallback to index.html
RUN printf '%s\n' \
  'server {' \
  '  listen       80;' \
  '  server_name  _;' \
  '  root   /usr/share/nginx/html;' \
  '  index  index.html;' \
  '  gzip on;' \
  '  gzip_types text/plain application/javascript application/json text/css image/svg+xml;' \
  '  location / {' \
  '    try_files $uri $uri/ /index.html;' \
  '  }' \
  '  location = /favicon.ico { log_not_found off; access_log off; }' \
  '  location = /robots.txt  { log_not_found off; access_log off; }' \
  '  error_page  405     =200 $uri;' \
  '}' \
  > /etc/nginx/conf.d/app.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Run Nginx (the default CMD in the base image)
CMD ["nginx", "-g", "daemon off;"]
