import { TestBed } from '@angular/core/testing';

import { GoogleChartService } from './google-chart.service';

describe('GoogleChartService', () => {
  let service: GoogleChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
