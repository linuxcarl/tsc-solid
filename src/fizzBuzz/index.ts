type responseFizzBuzz = number | string;
export class FizzBuzz {
  public converFizzBuzz(num: number): responseFizzBuzz {
    let numero: responseFizzBuzz = num;
    const multiploDeTres: number = num % 3;
    const multiploDeCinco: number = num % 5;
    if (multiploDeTres === 0) {
      numero = 'Fizz';
    }
    if (multiploDeCinco === 0) {
      numero = typeof numero === 'string' ? `${numero}Buzz` : 'Buzz';
    }
    return numero;
  }
}
