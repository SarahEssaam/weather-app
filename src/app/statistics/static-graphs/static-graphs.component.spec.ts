import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticGraphsComponent } from './static-graphs.component';

describe('StaticGraphsComponent', () => {
  let component: StaticGraphsComponent;
  let fixture: ComponentFixture<StaticGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticGraphsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
