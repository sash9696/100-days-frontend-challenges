import { describe, it, expect } from 'vitest';
import { twoSum } from './TwoSum';

describe('TwoSum', () => {
  it('should find indices of two numbers that sum to target', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it('should handle array with duplicate numbers', () => {
    const nums = [3, 2, 4];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([1, 2]);
  });

  it('should handle array with same numbers', () => {
    const nums = [3, 3];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it('should handle negative numbers', () => {
    const nums = [-1, -2, -3, -4];
    const target = -7;
    expect(twoSum(nums, target)).toEqual([2, 3]);
  });

  it('should handle large numbers', () => {
    const nums = [1000000, 2000000, 3000000];
    const target = 3000000;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it('should throw error when no solution exists', () => {
    const nums = [1, 2, 3, 4];
    const target = 10;
    expect(() => twoSum(nums, target)).toThrow('No solution found');
  });

  it('should handle empty array', () => {
    const nums: number[] = [];
    const target = 0;
    expect(() => twoSum(nums, target)).toThrow('No solution found');
  });
}); 