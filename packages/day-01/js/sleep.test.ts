import { describe, it, expect } from 'vitest';
import { sleep } from './sleep';

describe('sleep', () => {
  it('should wait for the specified time', async () => {
    const start = Date.now();
    await sleep(100);
    const end = Date.now();
    const elapsed = end - start;
    
    expect(elapsed).toBeGreaterThanOrEqual(100);
    expect(elapsed).toBeLessThanOrEqual(140);
  });

  it('should handle zero milliseconds', async () => {
    const start = Date.now();
    await sleep(0);
    const end = Date.now();
    const elapsed = end - start;
    
    expect(elapsed).toBeLessThan(10);
  });

  it('should handle negative milliseconds', async () => {
    const start = Date.now();
    await sleep(-100);
    const end = Date.now();
    const elapsed = end - start;
    
    expect(elapsed).toBeLessThan(10);
  });

  it('should handle multiple consecutive sleeps', async () => {
    const start = Date.now();
    await sleep(50);
    await sleep(50);
    const end = Date.now();
    const elapsed = end - start;
    
    expect(elapsed).toBeGreaterThanOrEqual(95); // Allow for small timing variations
    expect(elapsed).toBeLessThanOrEqual(140);
  });

  it('should not block other async operations', async () => {
    const results: number[] = [];
    
    const promise1 = sleep(50).then(() => results.push(1));
    const promise2 = sleep(100).then(() => results.push(2));
    
    await Promise.all([promise1, promise2]);
    
    expect(results).toEqual([1, 2]);
  });
}); 