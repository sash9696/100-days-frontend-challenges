# Day 2 Challenges

## Overview
Day 2 focuses on fundamental programming concepts with three distinct challenges across different domains.

## Challenges

### 1. DSA - Valid Parentheses
**Problem**: Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

**Requirements**:
- Open brackets must be closed by the same type of brackets
- Open brackets must be closed in the correct order
- Every close bracket has a corresponding open bracket of the same type

**Examples**:
- `"()"` → `true`
- `"()[]{}"` → `true`
- `"(]"` → `false`
- `"([)]"` → `false`
- `"{[]}"` → `true`

**File**: `packages/day-02/dsa/ValidParentheses.ts`

### 2. JavaScript - Polyfills for map() and filter()
**Problem**: Implement your own versions of `Array.prototype.map()` and `Array.prototype.filter()` methods without using the built-in methods.

**Requirements**:
- Your implementations should work exactly like the native methods
- Handle edge cases like empty arrays, null/undefined callbacks
- Preserve the original array and return a new array
- Support all parameters (callback, thisArg)

**Examples**:
- `customMap([1, 2, 3], x => x * 2)` → `[2, 4, 6]`
- `customFilter([1, 2, 3, 4, 5], x => x > 2)` → `[3, 4, 5]`

**File**: `packages/day-02/js/polyfills.ts`

### 3. React - Tic-Tac-Toe Game
**Problem**: Build a complete Tic-Tac-Toe game using React.

**Requirements**:
- 3x3 game board
- Alternating X and O players
- Win detection for all possible combinations
- Draw detection
- Game reset functionality
- Prevent moves on already filled cells
- Prevent moves after game is over

**Features to implement**:
- Game state management
- Player turn indication
- Winner announcement
- Draw announcement
- Reset button

**File**: `packages/day-02/react/src/components/TicTacToe.tsx`

## Setup and Testing

### DSA Challenge
```bash
cd packages/day-02/dsa
npm install
npm test
```

### JavaScript Challenge
```bash
cd packages/day-02/js
npm install
npm test
```

### React Challenge
```bash
cd packages/day-02/react
npm install
npm run dev  # Start development server
npm test     # Run tests
```

## Learning Objectives

### DSA
- Stack data structure
- String manipulation
- Algorithm design
- Edge case handling

### JavaScript
- Array methods implementation
- Higher-order functions
- Callback functions
- Context binding (thisArg)

### React
- State management with useState
- Event handling
- Conditional rendering
- Component composition
- Game logic implementation

## Tips
- Start with the basic functionality and add edge cases later
- Write tests first (TDD approach)
- Consider performance implications
- Think about user experience for the React game
- Document your thought process and decisions 