import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictorycityComponent } from './victorycity.component';

describe('VictorycityComponent', () => {
  let component: VictorycityComponent;
  let fixture: ComponentFixture<VictorycityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictorycityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictorycityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
