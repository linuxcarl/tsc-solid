import { FizzBuzz } from '../../src/fizzBuzz';

describe('Test FizzBuzz', () => {
  it('Slould be to have one', () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.converFizzBuzz(1)).toBe(1);
  });
  it('Slould be to have Fizz', () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.converFizzBuzz(3)).toMatch(/Fizz/);
  });

  it('Slould be to have Buzz', () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.converFizzBuzz(5)).toMatch(/Buzz/);
  });

  it('Slould be to have FizzBuzz', () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.converFizzBuzz(15)).toMatch(/FizzBuzz/);
  });
});
