import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ResultComponent } from '../components/result/result.component';

/**
 * Testing for ResultComponent and dependencies.
 * API calls are tested in the API Service Test.
 */  
describe('ResultComponent Integrated Test', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  })

  it('should be at initial state', () => {
    spyOn(component, 'getResult'); // Spy on the method to check if it has been called.
    component.ngOnInit();
    expect(component.sortingMethods).toBe(['Sort by ShopSafe Score', 
                                            'Sort by Google Review',
                                            'Sort by Distance']);
    expect(component.isLoaded).toBe(false);
    expect(component.httpError).toBe(false);
    expect(component.location).toBeDefined(); // Location must be defined within the URL param map.
    expect(component.latlng).toBeDefined(); // LatLng must be defined within the URL param map.
    expect(component.getResult).toHaveBeenCalled(); // Check if getResult method has been called.
  });

  it('should call sortResults and initTemplate on getResult call', () => {
    spyOn(component, 'sortResults');
    spyOn(component, 'initTemplate');
    component.getResult();

    expect(component.sortResults).toHaveBeenCalled();
    expect(component.initTemplate).toHaveBeenCalled();
  });

  it('should call sortResults on getSortedResult', () => {
    spyOn(component, 'sortResults');
    component.getSortedResult('Sort by ShopSafe Score');

    expect(component.sortResults).toHaveBeenCalled();
  });

  it('should init template on initTemplate', () => {
    spyOn(component, 'addMarkers');
    spyOn(component, 'zoomMap');
    component.initTemplate();

    expect(component.isLoaded).toEqual(true);
    expect(component.addMarkers).toHaveBeenCalled();
    expect(component.center).toBeDefined();
    expect(component.zoomMap).toHaveBeenCalled();
  });
});
