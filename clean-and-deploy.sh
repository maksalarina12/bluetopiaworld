#!/bin/bash
set -e

echo "🚀 Deploying Bluetopia World..."

# Clean up ALL containers to avoid conflicts
echo "🧹 Cleaning up ALL containers..."
sudo docker stop $(sudo docker ps -aq) 2>/dev/null || true
sudo docker rm $(sudo docker ps -aq) 2>/dev/null || true

# Build new image
echo "🔨 Building Docker image..."
sudo docker build -t bluetopia-world .

# Run container on port 8080
echo "🚀 Starting container on port 8080..."
sudo docker run -d --name bluetopia-world -p 8080:80 bluetopia-world

echo "✅ Done! App available at: http://localhost:8080"
echo "📊 Check status: sudo docker ps"
echo "📋 View logs: sudo docker logs bluetopia-world"
