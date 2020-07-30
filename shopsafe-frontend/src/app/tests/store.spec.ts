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
      open: true,
      latitude: 0,
      longitude: 0,
      rating: 5,
      score: 10,
      busy: 1,
      line: 1,
      hygiene: 1,
      masks: 1,
      checkInCount: 10,
      distance: 0
    });
    expect(result.id).toEqual('temp');
    expect(result.name).toEqual('test');
    expect(result.address).toEqual('1234 Test St.');
    expect(result.open).toEqual(true);
    expect(result.latitude).toEqual(0);
    expect(result.longitude).toEqual(0);
    expect(result.rating).toEqual(5);
    expect(result.score).toEqual(10);
    expect(result.checkInCount).toEqual(10);
    expect(result.busy).toEqual(1);
    expect(result.line).toEqual(1);
    expect(result.hygiene).toEqual(1);
    expect(result.masks).toEqual(1);
    expect(result.distance).toEqual(0);
  });
});
