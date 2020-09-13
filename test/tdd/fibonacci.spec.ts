import { fibonacci } from '../../src/tdd/fibonacci';

describe('Fibonacci should', () => {
  it('return zero if receive zero', () => {
    expect(fibonacci(0)).toBe(0);
  });
  it('return one if receive one', () => {
    expect(fibonacci(1)).toBe(1);
  });
});
