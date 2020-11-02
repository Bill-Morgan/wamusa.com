import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasBuddyComponent } from './gas-buddy.component';

describe('GasBuddyComponent', () => {
  let component: GasBuddyComponent;
  let fixture: ComponentFixture<GasBuddyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasBuddyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
