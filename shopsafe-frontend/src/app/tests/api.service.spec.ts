import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';
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
    const dummyParams = new HttpParams().set('location', 'Philadelphia').set('latLng', 'true');

    it('should return an Observable<ResultInterface>', () => {
      service.getNearbyStores('Philadelphia', true).subscribe( result => {
        expect(result).toEqual(dummyResult);
      });

      const req = httpMock.expectOne('${service.API_URL}/stores?location=Philadelphia&latLng=true');
      expect(req.request.method).toBe("GET");
      expect(req.request.params).toEqual(dummyParams);
      req.flush(dummyResult); // TODO: fix this
    });

    it('should throw an error', () => {
      service.getNearbyStores('unknown', true).subscribe(
        () => {},
        err => {
          expect(err).toBeTruthy();
        }
      );
      httpMock.expectNone('${service.API_URL}/stores?location=unknown&latLng=true');
    });
  });

  // GET /store
  describe('getNearbyStore', () => {
    it('should return an Observable<StoreResultInterface>', () => {
      service.getStoreById('ChIJizCzRjbGxokRYeittvdIjSU').subscribe( result => {
        expect(result).toBeTruthy();
      });

      const req = httpMock.expectOne('${service.API_URL}/store?id=ChIJizCzRjbGxokRYeittvdIjSU');
      expect(req.request.method).toBe("GET");
      req.flush(dummyStoreResult); // TODO: fix this
    });
  });

});
