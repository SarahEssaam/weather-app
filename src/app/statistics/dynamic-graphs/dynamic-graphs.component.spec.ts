import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicGraphsComponent } from './dynamic-graphs.component';

describe('DynamicGraphsComponent', () => {
  let component: DynamicGraphsComponent;
  let fixture: ComponentFixture<DynamicGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicGraphsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
