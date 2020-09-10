import { Repository } from './class/repository';
import { NotificationService } from './class/notify';
import { UseCase } from './class/useCase';

function start() {
  const repository = new Repository();
  const notifier = new NotificationService();
  const myUseCase = new UseCase(repository, notifier);

  const taxesResult: string = myUseCase.doSomethingWithTaxes();
  const savedResult: string = myUseCase.saveChanges();
  const noty = myUseCase.notify();

  console.log('taxesResult => ', taxesResult);
  console.log('savedResult => ', savedResult);
  console.log('noty => ', noty);
}
start();
