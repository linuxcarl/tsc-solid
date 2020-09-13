export function fibonacci(num: number): number {
  const partialFibonacci = (n: number): number =>
    n == 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

  return num == 0 ? num : partialFibonacci(num);
}
