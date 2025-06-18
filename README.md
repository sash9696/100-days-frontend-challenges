# 100 Days of Real Frontend Practice — No Shortcuts! 🚀

A comprehensive collection of frontend challenges covering DSA, JavaScript problem-solving, React components, and system design. Each challenge is designed to be self-contained, testable, and follows best practices.

## 🎯 Categories

- **DSA (TypeScript)**: Data Structures and Algorithms with test cases
- **JavaScript Problem Solving**: Common JS challenges (debounce, deepClone, etc.)
- **Vanilla JavaScript**: DOM-based challenges and browser logic
- **React (TypeScript)**: UI component challenges
- **Frontend System Design**: Architecture diagrams and tradeoff analysis

## 📁 Project Structure

```
/packages
  /day-01
    /dsa
      TwoSum.ts
      TwoSum.test.ts
    /js
      sleep.ts
      sleep.test.ts
    /vanilla-js
      accordion.js
    /react
      /src
        /components
          Accordion.tsx
        App.tsx
        main.tsx
      index.html
      package.json
      vite.config.ts
    /system-design
      README.md
    readme.md
  /day-02
    ...
```

## 🛠️ Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/100-days-frontend-challenges.git
   cd 100-days-frontend-challenges
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run tests for all packages:
   ```bash
   npm test
   ```

4. Start development server for a specific day:
   ```bash
   cd packages/day-XX
   npm run dev
   ```

## 🧪 Testing

- Each challenge includes test cases
- Run all tests: `npm test`
- Run tests for a specific day: `cd packages/day-XX && npm test`
- Run tests in watch mode: `cd packages/day-XX && npm run test:watch`
- Generate coverage report: `cd packages/day-XX && npm run test:coverage`

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Daily Challenges

Each day's challenges are self-contained and include:
- Problem statement
- Solution implementation
- Test cases
- Documentation
- System design considerations (where applicable)

## 🏗️ Architecture

The project follows these architectural principles:
- Modularity: Each challenge is self-contained in its own package
- Testability: Comprehensive test coverage
- Scalability: Structure supports 100+ days of challenges
- Maintainability: Clear organization and documentation 