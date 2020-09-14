import {
  IFizzBuzz,
  responseFizzBuzz,
} from '../../test/fizzBuzz/intefaces/fizzBuzz';
import { match } from 'x-match-expression';

export class FizzBuzz implements IFizzBuzz {
  private match: any = match;
  public converFizzBuzz(num: number): responseFizzBuzz {
    const divisibleBy = (divider: number) => () => num % divider === 0;

    return this.match(num)
      .case(divisibleBy(15), 'FizzBuzz')
      .case(divisibleBy(5), 'Buzz')
      .case(divisibleBy(3), 'Fizz')
      .default(num);
  }
}
