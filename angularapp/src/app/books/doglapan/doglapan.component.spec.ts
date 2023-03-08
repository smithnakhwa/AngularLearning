import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoglapanComponent } from './doglapan.component';

describe('DoglapanComponent', () => {
  let component: DoglapanComponent;
  let fixture: ComponentFixture<DoglapanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoglapanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoglapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
