#!/bin/bash
# AppSwap pre-publish hook
# This script runs before publishing to any destination

echo "🔄 Running pre-publish checks..."

# Build the project
if [ -f "package.json" ] && grep -q '"build"' package.json; then
    echo "📦 Building project..."
    npm run build
fi

# Run tests
if [ -f "package.json" ] && grep -q '"test"' package.json; then
    echo "🧪 Running tests..."
    npm test
fi

echo "✅ Pre-publish checks completed"
