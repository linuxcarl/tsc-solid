import { UseCase } from '../../src/dip/class/UseCase';
import { ExternalService } from '../../src/dip/class/ExternalService';

describe('Dependency Inversion principle => DIP', () => {
  test('Should be to have message: Doing external task', () => {
    const useCase = new UseCase(new ExternalService());
    expect(useCase.doSomething()).toMatch(/Doing external task/);
  });
});
