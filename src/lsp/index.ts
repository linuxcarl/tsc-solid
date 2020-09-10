//  VIOLACION DEL => Principio de sustitución de Liskov
class BadRectangle {
  protected _width: number = 0;
  protected _height: number = 0;
  constructor(width: number = 0, height: number = 0) {
    this._width = width;
    this._height = height;
  }
  public setWidth($width: number): void {
    this._width = $width;
  }

  setHeight($height: number): void {
    this._height = $height;
  }

  public getArea(): number {
    return this._width * this._height;
  }
}

class BadSquare extends BadRectangle {
  public setWidth(width: number): void {
    this._width = width;
    this._height = width;
  }
  public setHeight(height: number): void {
    this._width = height;
    this._height = height;
  }
}

const instance = new BadSquare(10, 14);
console.log('################ BAD LSP ###############');
instance.setWidth(20);
console.log(instance.getArea());
instance.setHeight(10);
console.log(instance.getArea());

// APLICACION CORRECTA DEL Principio de sustitución de Liskov
class Figure {
  public width: number = 0;
  public height: number = 0;
  public constructor() {}
  public getArea(): number {
    return this.width * this.height;
  }
}

class Rectangle extends Figure {
  public constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
}

class Square extends Rectangle {
  public constructor(length: number) {
    super(length, length);
  }
}
console.log('################ GOOD LSP ###############');
const goodLspSquare = new Square(2);
console.log(goodLspSquare.getArea());
const goodLspRectangle = new Rectangle(2, 3);
console.log(goodLspRectangle.getArea());
