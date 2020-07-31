import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from '../api/api.service';

// Dummy results for service testing
const dummyStores = [
  {
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
  },
  {
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
  }
];

const dummyResult = {
  stores: dummyStores,
  latLng: { latitude: 0, longitude: 0 }
};

const dummyStore = [
  {
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
  }
];

const dummyDataPoint = {
  value: 10,
  date: '2020-01-01'
};

const dummyCountyStats = [
  {
    countyName: 'test',
    stateName: 'test',
    cases: 10,
    deaths: 10,
    activeCases: 10,
    population: 100,
    covidData: dummyDataPoint
  }
];

const dummyStoreResult = {
  store: dummyStore,
  countyStats: dummyCountyStats,
  maskData: dummyDataPoint,
  busyData: dummyDataPoint,
  lineData: dummyDataPoint,
  hygieneData: dummyDataPoint
};

describe('ApiService', () => {
  let service: ApiService;
  let injector: TestBed;
  let httpMock: HttpTestingController; // Used to mock requests and provide dummy responses.

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    // Configure mock testing module.
    injector = getTestBed();
    service = TestBed.inject(ApiService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Make sure there are no outstanding requests.
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  // GET /stores
  describe('getNearbyStores', () => {
    it('should return an Observable<ResultInterface>'), () => {
      this.service.getNearbyStores().subscribe( result => {
        expect(result).toEqual(dummyResult);
      });

      const req = httpMock.expectOne('${service.API_URL}/stores');
      expect(req.request.method).toBe("GET");
      req.flush(dummyResult); // Flush method provides dummy values as a response.
    }
  });

  // GET /store
  describe('getNearbyStore', () => {
    it('should return an Observable<StoreResultInterface>'), () => {
      this.service.getNearbyStores().subscribe( result => {
        expect(result).toEqual(dummyStoreResult);
      });

      const req = httpMock.expectOne('${service.API_URL}/store');
      expect(req.request.method).toBe("GET");
      req.flush(dummyStoreResult);
    }
  })
});
