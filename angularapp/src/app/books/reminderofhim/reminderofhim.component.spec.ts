import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderofhimComponent } from './reminderofhim.component';

describe('ReminderofhimComponent', () => {
  let component: ReminderofhimComponent;
  let fixture: ComponentFixture<ReminderofhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderofhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderofhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
