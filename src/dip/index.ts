class UseCase {
  private externalService: any;
  public constructor() {
    this.externalService = new ExternalService();
  }
  public doSomething(): string {
    return this.externalService.doExternalTask();
  }
}

class ExternalService {
  public doExternalTask(): string {
    return 'Doing task...';
  }
}
const useCase = new UseCase();
console.log(useCase.doSomething());
