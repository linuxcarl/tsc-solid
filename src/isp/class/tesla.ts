import { Car } from '../interfaces/car';
import { Tesla } from '../interfaces/tesla';

export class ModelS implements Car, Tesla {
  public accelerate(): string {
    return 'Speeding...';
  }
  public breack(): string {
    return 'Stopping...';
  }
  public startEngine(): string {
    return 'Starting engine ...';
  }
  public autoPilot(): string {
    return 'wooooooooow...';
  }
  public ludicrousSpeed(): string {
    return 'Self driving...';
  }
}
