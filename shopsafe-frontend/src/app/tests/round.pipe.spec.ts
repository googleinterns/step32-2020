import { RoundPipe } from '../pipes/round.pipe';

describe('RoundPipe', () => {
  it('create an instance', () => {
    const pipe = new RoundPipe();
    expect(pipe).toBeTruthy();
  });
});
