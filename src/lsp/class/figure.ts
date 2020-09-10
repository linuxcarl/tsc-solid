export class Figure {
  public width: number = 0;
  public height: number = 0;
  public constructor() {}
  public getArea(): number {
    return this.width * this.height;
  }
}
