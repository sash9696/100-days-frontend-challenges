import React from 'react';
import { Accordion } from './components/Accordion';
import './App.css';

const accordionItems = [
  {
    id: '1',
    title: 'Two Sum Challenge',
    content: 'Find two numbers in an array that add up to a target value. Check the DSA folder for implementation and tests.',
  },
  {
    id: '2',
    title: 'Sleep Function Challenge',
    content: 'Implement a sleep function that returns a Promise. Check the JS folder for implementation and tests.',
  },
  {
    id: '3',
    title: 'Vanilla JS Accordion',
    content: 'A vanilla JavaScript implementation of an accordion component. Check the vanilla-js folder for implementation.',
  },
  {
    id: '4',
    title: 'React Accordion',
    content: 'A React implementation of an accordion component with TypeScript. Check the react folder for implementation and tests.',
  },
  {
    id: '5',
    title: 'System Design',
    content: 'Documentation and architecture design for the accordion component. Check the system-design folder for details.',
  },
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Day 1 - Accordion Challenge</h1>
        <p>100 Days of Frontend Practice</p>
      </header>
      <main className="app-main">
        <Accordion items={accordionItems} />
      </main>
    </div>
  );
}

export default App; 