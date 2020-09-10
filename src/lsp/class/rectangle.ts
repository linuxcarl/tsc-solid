import { Figure } from './figure';

export class Rectangle extends Figure {
  public constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
}
