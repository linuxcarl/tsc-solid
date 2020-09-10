import { Rectangle } from './rectangle';

export class Square extends Rectangle {
  public constructor(length: number) {
    super(length, length);
  }
}
