import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'react', // Set the root to the react directory
  build: {
    outDir: '../dist',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './react'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./react/test/setup.ts'],
  },
}); 