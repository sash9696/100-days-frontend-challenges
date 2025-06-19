/**
 * Array Polyfills - map() and filter()
 * 
 * Problem: Implement your own versions of the Array.prototype.map() and Array.prototype.filter() methods
 * without using the built-in methods.
 * 
 * Requirements:
 * 1. Your map() should work exactly like Array.prototype.map()
 * 2. Your filter() should work exactly like Array.prototype.filter()
 * 3. Both should handle edge cases like empty arrays, null/undefined callbacks, etc.
 * 4. Both should preserve the original array and return a new array
 * 
 * Examples:
 * 
 * map() examples:
 * [1, 2, 3].map(x => x * 2) → [2, 4, 6]
 * ['a', 'b', 'c'].map((x, i) => x + i) → ['a0', 'b1', 'c2']
 * 
 * filter() examples:
 * [1, 2, 3, 4, 5].filter(x => x > 2) → [3, 4, 5]
 * ['apple', 'banana', 'cherry'].filter(x => x.length > 5) → ['banana', 'cherry']
 */

/**
 * Custom implementation of Array.prototype.map()
 * @param array - The array to map over
 * @param callback - Function to execute on each element
 * @param thisArg - Value to use as this when executing callback
 * @returns A new array with the results of calling callback on every element
 */
export function customMap<T, U>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => U,
  thisArg?: any
): U[] {
  // TODO: Implement your solution here
  throw new Error("Not implemented");
}

/**
 * Custom implementation of Array.prototype.filter()
 * @param array - The array to filter
 * @param callback - Function to test each element
 * @param thisArg - Value to use as this when executing callback
 * @returns A new array with elements that pass the test
 */
export function customFilter<T>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => boolean,
  thisArg?: any
): T[] {
  // TODO: Implement your solution here
  throw new Error("Not implemented");
} 