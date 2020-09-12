import { Car } from '../interfaces/car';

export class Mustang implements Car {
  public accelerate(): string {
    return 'Speeding...';
  }
  public breack(): string {
    return 'Stopping...';
  }
  public startEngine(): string {
    return 'Starting engine ...';
  }
}
