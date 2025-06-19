import { describe, it, expect } from 'vitest';
import { customMap, customFilter } from './polyfills';

describe('customMap', () => {
  it('should double each number in array', () => {
    const result = customMap([1, 2, 3], x => x * 2);
    expect(result).toEqual([2, 4, 6]);
  });

  it('should work with index parameter', () => {
    const result = customMap(['a', 'b', 'c'], (x, i) => x + i);
    expect(result).toEqual(['a0', 'b1', 'c2']);
  });

  it('should work with empty array', () => {
    const result = customMap([], x => x * 2);
    expect(result).toEqual([]);
  });

  it('should work with array parameter', () => {
    const result = customMap([1, 2, 3], (x, i, arr) => x + arr.length);
    expect(result).toEqual([4, 5, 6]);
  });

  it('should work with thisArg', () => {
    const obj = { multiplier: 3 };
    const result = customMap([1, 2, 3], function(this: typeof obj, x) {
      return x * this.multiplier;
    }, obj);
    expect(result).toEqual([3, 6, 9]);
  });

  it('should handle different data types', () => {
    const result = customMap([1, 'hello', true], x => typeof x);
    expect(result).toEqual(['number', 'string', 'boolean']);
  });
});

describe('customFilter', () => {
  it('should filter numbers greater than 2', () => {
    const result = customFilter([1, 2, 3, 4, 5], x => x > 2);
    expect(result).toEqual([3, 4, 5]);
  });

  it('should filter strings by length', () => {
    const result = customFilter(['apple', 'banana', 'cherry'], x => x.length > 5);
    expect(result).toEqual(['banana', 'cherry']);
  });

  it('should work with empty array', () => {
    const result = customFilter([], x => x > 2);
    expect(result).toEqual([]);
  });

  it('should work with index parameter', () => {
    const result = customFilter([1, 2, 3, 4, 5], (x, i) => i % 2 === 0);
    expect(result).toEqual([1, 3, 5]);
  });

  it('should work with array parameter', () => {
    const result = customFilter([1, 2, 3], (x, i, arr) => x > arr.length);
    expect(result).toEqual([]);
  });

  it('should work with thisArg', () => {
    const obj = { threshold: 3 };
    const result = customFilter([1, 2, 3, 4, 5], function(this: typeof obj, x) {
      return x > this.threshold;
    }, obj);
    expect(result).toEqual([4, 5]);
  });

  it('should filter out falsy values', () => {
    const result = customFilter([0, 1, false, 2, '', 3], x => Boolean(x));
    expect(result).toEqual([1, 2, 3]);
  });

  it('should return empty array when no elements pass filter', () => {
    const result = customFilter([1, 2, 3], x => x > 10);
    expect(result).toEqual([]);
  });
}); 