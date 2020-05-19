import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyComputerComponent } from './buy-computer.component';

describe('BuyComputerComponent', () => {
  let component: BuyComputerComponent;
  let fixture: ComponentFixture<BuyComputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyComputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
