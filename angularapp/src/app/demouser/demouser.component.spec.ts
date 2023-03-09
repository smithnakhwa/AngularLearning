import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemouserComponent } from './demouser.component';

describe('DemouserComponent', () => {
  let component: DemouserComponent;
  let fixture: ComponentFixture<DemouserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemouserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
