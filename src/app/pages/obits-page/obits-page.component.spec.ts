import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObitsPageComponent } from './obits-page.component';

describe('ObitsPageComponent', () => {
  let component: ObitsPageComponent;
  let fixture: ComponentFixture<ObitsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObitsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
