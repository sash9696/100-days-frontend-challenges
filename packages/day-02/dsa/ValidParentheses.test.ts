import { describe, it, expect } from 'vitest';
import { isValid } from './ValidParentheses';

describe('ValidParentheses', () => {
  it('should return true for valid simple parentheses', () => {
    expect(isValid('()')).toBe(true);
  });

  it('should return true for valid mixed parentheses', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  it('should return false for invalid parentheses', () => {
    expect(isValid('(]')).toBe(false);
  });

  it('should return false for mismatched parentheses', () => {
    expect(isValid('([)]')).toBe(false);
  });

  it('should return true for nested valid parentheses', () => {
    expect(isValid('{[]}')).toBe(true);
  });

  it('should return true for empty string', () => {
    expect(isValid('')).toBe(true);
  });

  it('should return false for single opening bracket', () => {
    expect(isValid('(')).toBe(false);
  });

  it('should return false for single closing bracket', () => {
    expect(isValid(')')).toBe(false);
  });

  it('should return false for multiple opening brackets', () => {
    expect(isValid('(((')).toBe(false);
  });

  it('should return false for multiple closing brackets', () => {
    expect(isValid(')))')).toBe(false);
  });

  it('should handle complex nested structures', () => {
    expect(isValid('({[]})')).toBe(true);
  });

  it('should handle complex invalid structures', () => {
    expect(isValid('({[}])')).toBe(false);
  });
}); 