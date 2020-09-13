export class FizzBuzz {
  public converFizzBuzz(num: number): number | string {
    let numero: number | string = num;
    const multiploDeTres: number = num % 3;
    if (multiploDeTres === 0) {
      numero = 'Fizz';
    }
    return numero;
  }
}
