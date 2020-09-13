import { FizzBuzz } from '../../src/fizzBuzz';

const fizzBuzz = new FizzBuzz();
describe('Test FizzBuzz', () => {
  it('Slould be to have one', () => {
    const expected = 1;
    const result = fizzBuzz.converFizzBuzz(1);

    expect(result).toBe(expected);
  });
  it('Slould be to have Fizz', () => {
    const expected = /Fizz/;
    const result = fizzBuzz.converFizzBuzz(3);

    expect(result).toMatch(expected);
  });

  it('Slould be to have Buzz', () => {
    const expected = /Buzz/;
    const result = fizzBuzz.converFizzBuzz(5);

    expect(result).toMatch(expected);
  });

  it('Slould be to have FizzBuzz', () => {
    const expected = /FizzBuzz/;
    const result = fizzBuzz.converFizzBuzz(15);

    expect(result).toMatch(expected);
  });
});
