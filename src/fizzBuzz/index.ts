import {
  IFizzBuzz,
  responseFizzBuzz,
} from '../../test/fizzBuzz/intefaces/fizzBuzz';

export class FizzBuzz implements IFizzBuzz {
  public converFizzBuzz(num: number): responseFizzBuzz {
    const divisibleBy = (divider: number, n: number) => n % divider === 0;

    if (divisibleBy(15, num)) return 'FizzBuzz';
    if (divisibleBy(3, num)) return 'Fizz';
    if (divisibleBy(5, num)) return 'Buzz';

    return num;
  }
}
