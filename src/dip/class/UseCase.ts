import { IExternalService } from '../interfaces/externalService';

export class UseCase {
  private externalService: IExternalService;
  public constructor(externalService: IExternalService) {
    this.externalService = externalService;
  }
  public doSomething(): string {
    return this.externalService.doExternalTask();
  }
}
