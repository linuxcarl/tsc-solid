import { ExternalService } from './class/ExternalService';
import { UseCase } from './class/UseCase';

const useCase = new UseCase(new ExternalService());
console.log(useCase.doSomething());
