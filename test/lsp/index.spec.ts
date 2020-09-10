import { Rectangle } from  '../../src/lsp/class/rectangle';
import { Square } from '../../src/lsp/class/square'
describe('Liskov substitution principle. - LSP', () => {
    test('Should be able to calculate the area for the rectangle', () => {
      const rectangle = new Rectangle(2,3);
      expect(rectangle.getArea()).toBe(6);
    });

    test('Should be able to calculate the area for the square', () => {
        const squere = new Square(3);
        expect(squere.getArea()).toBe(9);
      });
});