#!/bin/bash
set -e

echo "🚀 Deploying Bluetopia World (no sudo)..."

# Clean up containers
echo "🧹 Cleaning up containers..."
docker stop bluetopia-world 2>/dev/null || true
docker rm bluetopia-world 2>/dev/null || true

# Build new image
echo "🔨 Building Docker image..."
docker build -t bluetopia-world .

# Run container on port 8080
echo "🚀 Starting container on port 8080..."
docker run -d --name bluetopia-world -p 8080:80 bluetopia-world

echo "✅ Done! App available at: http://localhost:8080"
echo "📊 Check status: docker ps"
echo "📋 View logs: docker logs bluetopia-world"
