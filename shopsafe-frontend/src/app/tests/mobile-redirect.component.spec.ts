import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRedirectComponent } from './mobile-redirect.component';

describe('MobileRedirectComponent', () => {
  let component: MobileRedirectComponent;
  let fixture: ComponentFixture<MobileRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
