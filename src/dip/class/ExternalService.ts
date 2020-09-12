import { IExternalService } from '../interfaces/externalService';

export class ExternalService implements IExternalService {
  public doExternalTask(): string {
    return 'Doing external task...';
  }
}
