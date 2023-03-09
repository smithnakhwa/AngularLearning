import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemouserdetailsComponent } from './demouserdetails.component';

describe('DemouserdetailsComponent', () => {
  let component: DemouserdetailsComponent;
  let fixture: ComponentFixture<DemouserdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemouserdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemouserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
