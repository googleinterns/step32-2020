import { Store } from '../classes/store/store';

describe('Store', () => {
  it('should create an instance', () => {
    expect(new Store()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let result = new Store({
      id: 'temp',
      name: 'test',
      address: '1234 Test St.',
      score: 10,
      checkedIn: 10,
      status: true,
      latLng: [0, 0],
      busy: 1,
      line: 1,
      hygiene: 1,
      masks: 1
    });
    expect(result.id).toEqual('temp');
    expect(result.name).toEqual('test');
    expect(result.address).toEqual('1234 Test St.');
    expect(result.score).toEqual(10);
    expect(result.checkedIn).toEqual(10);
    expect(result.status).toEqual(true);
    expect(result.latLng).toEqual([0,0]);
    expect(result.busy).toEqual(1);
    expect(result.line).toEqual(1);
    expect(result.hygiene).toEqual(1);
    expect(result.masks).toEqual(1);
  });
});
