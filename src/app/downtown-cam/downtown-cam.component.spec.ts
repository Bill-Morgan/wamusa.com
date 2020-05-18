import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DowntownCamComponent } from './downtown-cam.component';

describe('DowntownCamComponent', () => {
  let component: DowntownCamComponent;
  let fixture: ComponentFixture<DowntownCamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DowntownCamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DowntownCamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
