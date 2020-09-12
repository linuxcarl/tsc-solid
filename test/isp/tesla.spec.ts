import { ModelS } from '../../src/isp/class/tesla';

const teslaModelS = new ModelS();
describe('Interface segregation principle. - ISP ', () => {
  test('Should reply to the message Speeding', () => {
    const message = teslaModelS.accelerate();
    expect(message).toMatch(/Speeding/);
  });
  test('Should reply to the message Stopping', () => {
    const message = teslaModelS.breack();
    expect(message).toMatch(/Stopping/);
  });
  test('Should reply to the message Starting engine ', () => {
    const message = teslaModelS.startEngine();
    expect(message).toMatch(/Starting engine/);
  });
  test('Should reply to the message wooooooooow', () => {
    const message = teslaModelS.autoPilot();
    expect(message).toMatch(/wooooooooow/);
  });
  test('Should reply to the message Self driving', () => {
    const message = teslaModelS.ludicrousSpeed();
    expect(message).toMatch(/Self driving/);
  });
});
