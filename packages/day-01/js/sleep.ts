/**
 * Sleep Function Challenge
 * 
 * Problem Statement:
 * Implement a sleep function that returns a Promise which resolves after the specified time.
 * This is useful for creating delays in asynchronous code.
 * 
 * Example:
 * ```typescript
 * async function example() {
 *   console.log('Start');
 *   await sleep(1000); // Sleep for 1 second
 *   console.log('After 1 second');
 * }
 * ```
 * 
 * @param ms Time to sleep in milliseconds
 * @returns Promise that resolves after the specified time
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
} 