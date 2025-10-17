#!/bin/bash
set -e

echo "🚀 Deploying Bluetopia World..."

docker stop bluetopia-world 2>/dev/null || true
docker rm bluetopia-world 2>/dev/null || true

docker build -t bluetopia-world .
docker run -d --name bluetopia-world -p 80:80 bluetopia-world

echo "✅ Done! App at http://localhost"