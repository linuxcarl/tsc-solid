import { Repository } from '../../src/srp/class/repository';
import { UseCase } from '../../src/srp/class/useCase';
import { NotificationService } from '../../src/srp/class/notify';

let myUseCase: any;
describe('Single Responsibility principle. - SRP', () => {
  beforeAll(() => {
    const repository = new Repository();
    const notifier = new NotificationService();
    myUseCase = new UseCase(repository, notifier);
  });
  test('Should test the method doSomethingWithTaxes', () => {
    const taxesResult: string = myUseCase.doSomethingWithTaxes();
    expect(taxesResult).toMatch(/taxes/);
  });
  test('Should test the method saveChanges', () => {
    const savedResult: string = myUseCase.saveChanges();
    expect(savedResult).toMatch(/record/);
  });
  test('Should test the method notify', () => {
    const noty = myUseCase.notify();
    expect(noty).toBeTruthy();
  });
});
