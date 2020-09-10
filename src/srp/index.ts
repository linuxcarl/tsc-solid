class UseCase {
  public doSomethingWithTaxes(): void {
    console.log('Do somethings realted with taxes');
  }
  public saveChangesInDatabase(): void {
    console.log('Saving in database...');
  }

  public sendEmail(): void {
    console.log('Send email...');
  }
}
function start() {
  const myUseCase = new UseCase();
  myUseCase.doSomethingWithTaxes();
  myUseCase.saveChangesInDatabase();
  myUseCase.sendEmail();
}
start();
