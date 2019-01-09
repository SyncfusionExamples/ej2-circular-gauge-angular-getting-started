import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculargaugeComponent } from './circulargauge.component';

describe('CirculargaugeComponent', () => {
  let component: CirculargaugeComponent;
  let fixture: ComponentFixture<CirculargaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirculargaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirculargaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
