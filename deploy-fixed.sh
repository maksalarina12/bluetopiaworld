#!/bin/bash
set -e

echo "🚀 Deploying Bluetopia World..."

# Stop and remove any existing containers
echo "🧹 Cleaning up old containers..."
sudo docker stop bluetopia-world 2>/dev/null || true
sudo docker stop bluetopiaworld-container 2>/dev/null || true
sudo docker stop my-web-server 2>/dev/null || true
sudo docker rm bluetopia-world 2>/dev/null || true
sudo docker rm bluetopiaworld-container 2>/dev/null || true
sudo docker rm my-web-server 2>/dev/null || true

# Remove any stopped containers
sudo docker container prune -f

# Build new image
echo "🔨 Building Docker image..."
sudo docker build -t bluetopia-world .

# Run container on port 8080 to avoid conflict
echo "🚀 Starting container on port 8080..."
sudo docker run -d --name bluetopia-world -p 8080:80 bluetopia-world

echo "✅ Done! App available at: http://localhost:8080"
echo "📊 Check status: sudo docker ps"
echo "📋 View logs: sudo docker logs bluetopia-world"
