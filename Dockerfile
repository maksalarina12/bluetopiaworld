########################
# Builder - install deps and build Vite app
########################
FROM node:18-alpine AS builder

WORKDIR /app

# Ensure production env for builds
ENV NODE_ENV=production

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm ci --silent

# Copy source code
COPY . .

# Build the application and verify it succeeded
RUN npm run build && \
    if [ ! -d "dist" ]; then echo "Build failed - dist directory not found" && exit 1; fi && \
    if [ ! -f "dist/index.html" ]; then echo "Build failed - index.html not found" && exit 1; fi

########################
# Runtime - Nginx to serve static files
########################
FROM nginx:alpine AS runtime

# Install curl for healthcheck
RUN apk add --no-cache curl

# Remove default config and add SPA-friendly routing
RUN rm -f /etc/nginx/conf.d/default.conf

# Write a minimal nginx config supporting history API fallback to index.html
RUN printf '%s\n' \
  'server {' \
  '  listen       80;' \
  '  server_name  _;' \
  '  root   /usr/share/nginx/html;' \
  '  index  index.html;' \
  '  client_max_body_size 1M;' \
  '  gzip on;' \
  '  gzip_vary on;' \
  '  gzip_min_length 1024;' \
  '  gzip_proxied any;' \
  '  gzip_comp_level 6;' \
  '  gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json image/svg+xml;' \
  '  location / {' \
  '    try_files $uri $uri/ /index.html;' \
  '    expires 1h;' \
  '    add_header Cache-Control "public, immutable";' \
  '  }' \
  '  location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {' \
  '    expires 1y;' \
  '    add_header Cache-Control "public, immutable";' \
  '  }' \
  '  location = /favicon.ico { log_not_found off; access_log off; expires 1y; }' \
  '  location = /robots.txt  { log_not_found off; access_log off; expires 1y; }' \
  '  error_page  405     =200 $uri;' \
  '}' \
  > /etc/nginx/conf.d/app.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Verify that the built files are present
RUN ls -la /usr/share/nginx/html/ && \
    if [ ! -f "/usr/share/nginx/html/index.html" ]; then echo "index.html not found in nginx html directory" && exit 1; fi

# Environment for runtime
ENV NODE_ENV=production

# Simple container healthcheck - verifies server responds on /
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD curl -f http://127.0.0.1/ || exit 1

EXPOSE 80

# Run Nginx (the default CMD in the base image)
CMD ["nginx", "-g", "daemon off;"]
