import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowAreaComponent } from './now-area.component';

describe('NowAreaComponent', () => {
  let component: NowAreaComponent;
  let fixture: ComponentFixture<NowAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NowAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NowAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
