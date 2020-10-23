import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitchfieldComponent } from './litchfield.component';

describe('LitchfieldComponent', () => {
  let component: LitchfieldComponent;
  let fixture: ComponentFixture<LitchfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitchfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitchfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
