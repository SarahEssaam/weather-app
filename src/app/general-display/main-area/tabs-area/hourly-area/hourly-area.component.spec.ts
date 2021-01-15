import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyAreaComponent } from './hourly-area.component';

describe('HourlyAreaComponent', () => {
  let component: HourlyAreaComponent;
  let fixture: ComponentFixture<HourlyAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
