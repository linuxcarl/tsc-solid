export class UseCase {
  #repository: any;
  #notifier: any;
  public constructor(repo: any, notifier: any) {
    this.#repository = repo;
    this.#notifier = notifier;
  }
  public doSomethingWithTaxes(): string {
    return 'Do somethings realted with taxes';
  }
  public saveChanges(): string {
    try {
      const updated = this.#repository.update();
      return updated;
    } catch (error) {
      throw new Error(error);
    }
  }

  public notify(): boolean {
    try {
      const send = this.#notifier.notify('Hi friend! it send mai...');
      return send;
    } catch (error) {
      throw new Error(error);
    }
  }
}
