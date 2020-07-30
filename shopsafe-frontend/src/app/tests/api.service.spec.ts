import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from '../api/api.service';

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
});

describe('getNearbyStores', () => {
  it('should return an Observable<ResultInterface>'), () => {
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
      latLng: { 0, 0 }
    };

    this.service.getNearbyStores().subscribe( result => {
      expect(result).toEqual(dummyResult);
    });

    const req = httpMock.expectOne('${service.API_URL}/stores');
    expect(req.request.method).toBe("GET");
    req.flush(dummyResult); // Flush method provides dummy values as a response.
  }
})
