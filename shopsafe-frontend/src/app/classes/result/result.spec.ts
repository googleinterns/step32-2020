import { Result } from './result';

describe('Result', () => {
  // Checks if constructor creates instance
  it('should create an instance', () => {
    expect(new Result()).toBeTruthy();
  });

  // Checks if constructor takes in values
  it('should accept values in the constructor', () => {
    let result = new Result({
      id: 'temp',
      fips: 1234,
      county: 'St. Lawrence',
      state: 'New York',
      confirmedCases: 10,
      confirmedDeaths: 5,
      nearbyStores: []
    });
    expect(result.id).toEqual('temp');
    expect(result.fips).toEqual(1234);
    expect(result.county).toEqual('St. Lawrence');
    expect(result.state).toEqual('New York');
    expect(result.confirmedCases).toEqual(10);
    expect(result.confirmedDeaths).toEqual(5);
    expect(result.nearbyStores).toEqual([]);
  });
});
