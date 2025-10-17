#!/bin/bash

echo "🧹 Cleaning up Docker containers..."

# List all containers
echo "📋 Current containers:"
sudo docker ps -a

# Stop and remove specific containers
echo "🛑 Stopping and removing containers..."
sudo docker stop bluetopia-world bluetopiaworld-container my-web-server 2>/dev/null || true
sudo docker rm bluetopia-world bluetopiaworld-container my-web-server 2>/dev/null || true

# Clean up any stopped containers
sudo docker container prune -f

echo "✅ Cleanup complete!"
echo "📋 Remaining containers:"
sudo docker ps -a
