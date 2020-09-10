import { Rectangle } from './class/rectangle';
import { Square } from './class/square';

console.log('################ Rectangle LSP ###############');
const goodLspRectangle = new Rectangle(2, 3);
console.log(goodLspRectangle.getArea());

console.log('################ Square LSP ###############');
const goodLspSquare = new Square(2);
console.log(goodLspSquare.getArea());
