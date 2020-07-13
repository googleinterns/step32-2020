import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeochartComponent } from './geochart.component';

describe('GeochartComponent', () => {
  let component: GeochartComponent;
  let fixture: ComponentFixture<GeochartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeochartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeochartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
