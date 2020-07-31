import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';
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

  // GET /stores
  describe('getNearbyStores', () => {
    const dummyParams = new HttpParams().set('location', '19104').set('latLng', 'true');

    it('should return an Observable<ResultInterface>', () => {
      service.getNearbyStores('19104', true).subscribe( result => {
        expect(result).toBeTruthy();
      });

      const req = httpMock.expectOne('${service.API_URL}/stores?location=19104&latLng=true');
      expect(req.request.method).toBe("GET");
      expect(req.request.params).toEqual(dummyParams);
      req.flush('');
    });

    it('should throw an error', () => {
      const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
      const errorMessage = "400 Bad Request";
      service.getNearbyStores('unknown', true).subscribe(
        () => {},
        err => {
          expect(err).toBeTruthy();
        }
      );
      const req = httpMock.expectOne('${service.API_URL}/stores?location=unknown&latLng=true');
      req.flush(errorMessage, mockErrorResponse);
    });
  });

  // GET /store
  describe('getNearbyStore', () => {
    it('should return an Observable<StoreResultInterface>', () => {
      const dummyParams = new HttpParams().set('id', 'ChIJizCzRjbGxokRYeittvdIjSU');
      
      service.getStoreById('ChIJizCzRjbGxokRYeittvdIjSU').subscribe( result => {
        expect(result).toBeTruthy();
      });

      const req = httpMock.expectOne('${service.API_URL}/store?id=ChIJizCzRjbGxokRYeittvdIjSU');
      expect(req.request.method).toBe("GET");
      expect(req.request.params).toEqual(dummyParams);
      req.flush('');
    });

    it('should throw an error', () => {
      const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
      const errorMessage = "400 Bad Request";
      service.getStoreById('12345').subscribe(
        () => {},
        err => {
          expect(err).toBeTruthy();
        }
      );
      const req = httpMock.expectOne('${service.API_URL}/store?id=12345');
      req.flush(errorMessage, mockErrorResponse);
    });
  });

  // POST /checkin
  describe('createCheckIn', () => {
    it('should return Observable<Object>', () => {
      const dummyParams = new HttpParams().set('storeId', 'ChIJizCzRjbGxokRYeittvdIjSU')
                                          .set('busy', '5')
                                          .set('line', '5')
                                          .set('hygiene', '5')
                                          .set('mask', '5');

      service.createCheckIn('ChIJizCzRjbGxokRYeittvdIjSU', 5, 5, 5, 5).subscribe( result => {
        expect(result).toBeTruthy();
      });

      const req = httpMock.expectOne('${service.API_URL}/checkin?storeId=ChIJizCzRjbGxokRYeittvdIjSU&busy=5&line=5&hygiene=5&mask=5');
      expect(req.request.method).toBe("POST");
      expect(req.request.params).toEqual(dummyParams);
      req.flush(''); // Server could send back any response
    });

    it('should throw an error', () => {
      const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
      const errorMessage = "400 Bad Request";
      service.createCheckIn('12345', 5, 5, 5, 5).subscribe(
        () => {},
        err => {
          expect(err).toBeTruthy();
        }
      );
      const req = httpMock.expectOne('${service.API_URL}/store?id=12345');
      req.flush(errorMessage, mockErrorResponse);
    });
  });

});
