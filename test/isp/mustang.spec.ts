import { Mustang } from '../../src/isp/class/mustang';

const muestang = new Mustang();
describe('Interface segregation principle. - ISP ', () => {
  test('Should reply to the message Speeding', () => {
    const message = muestang.accelerate();
    expect(message).toMatch(/Speeding/);
  });
  test('Should reply to the message Stopping', () => {
    const message = muestang.breack();
    expect(message).toMatch(/Stopping/);
  });
  test('Should reply to the message Starting engine ', () => {
    const message = muestang.startEngine();
    expect(message).toMatch(/Starting engine/);
  });
});
