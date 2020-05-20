import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatRateRepairsComponent } from './flat-rate-repairs.component';

describe('FlatRateRepairsComponent', () => {
  let component: FlatRateRepairsComponent;
  let fixture: ComponentFixture<FlatRateRepairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatRateRepairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatRateRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
