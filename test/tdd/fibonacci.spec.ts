import { fibonacci } from '../../src/tdd/fibonacci';

describe('Fibonacci should', () => {
  it('return zero if receive zero', () => {
    expect(fibonacci(0)).toBe(0);
  });
});
