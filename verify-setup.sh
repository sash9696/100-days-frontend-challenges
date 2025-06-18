#!/bin/bash

echo "🔍 Verifying project setup..."

# Check root dependencies
echo "\n📦 Installing root dependencies..."
npm install

# Test DSA challenges
echo "\n🧮 Testing DSA challenges..."
cd packages/day-01/dsa
npm install
npm test -- run
cd ../../..

# Test JS challenges
echo "\n⚡ Testing JS challenges..."
cd packages/day-01/js
npm install
npm test -- run
cd ../../..

# Test React app
echo "\n⚛️ Testing React app..."
cd packages/day-01/react
npm install
npm run dev &
cd ../../..

echo "\n✅ Setup verification complete!" 