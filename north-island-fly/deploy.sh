#!/bin/bash

# North Island Fly Website Deployment Script

echo "🎣 Building North Island Fly website..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Generate static site
echo "🔨 Generating static site..."
npx nuxt generate

# Copy generated files to docs folder for GitHub Pages
echo "📁 Preparing files for GitHub Pages..."
rm -rf docs
cp -r .output/public docs

echo "✅ Build complete!"
echo ""
echo "📋 Next steps:"
echo "1. Create a new repository on GitHub"
echo "2. Push this code to the repository"
echo "3. Go to repository Settings > Pages"
echo "4. Set source to 'Deploy from a branch'"
echo "5. Select 'main' branch and '/docs' folder"
echo "6. Your site will be available at: https://[username].github.io/[repository-name]"
echo ""
echo "🚀 Happy fishing!"
