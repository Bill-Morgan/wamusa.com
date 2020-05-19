import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McCovid19Component } from './mc-covid19.component';

describe('McCovid19Component', () => {
  let component: McCovid19Component;
  let fixture: ComponentFixture<McCovid19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McCovid19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McCovid19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
