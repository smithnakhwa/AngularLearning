import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cote2Component } from './cote2.component';

describe('Cote2Component', () => {
  let component: Cote2Component;
  let fixture: ComponentFixture<Cote2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cote2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cote2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
