import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Stock } from './models/stock';
import { StockComponent } from './stock/stock.component';
import { Test2Component } from './test2/test2.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        Test2Component,
        StockComponent,Comp1Component,Comp2Component,Comp3Component,Comp4Component
      ],
    }).compileComponents();
  }));
 describe('AppComponent',()=>{
   describe('Simple,No Anguar Unit Test',()=>{
    /**Move all the previous test code into a child describe block */
   });
   describe('Angular-Aware test',()=>{
    let fixture,component;
    beforeEach(async(()=>{
     TestBed.configureTestingModule({
      declarations:[AppComponent,Test2Component,StockComponent,Comp1Component,Comp2Component,Comp3Component,Comp4Component],
     }).compileComponents();
    }));
    beforeEach(async(()=>{
      fixture=TestBed.createComponent(AppComponent);
      component=fixture.componentInstance;
      fixture.detectChanges();
    }));
    it('should create test2 componet and render firstName',()=>{
      const nameEl=fixture.debugElement.query(By.css('.name'));
      expect(nameEl.nativeElement.textContent.trim()).toEqual('Rocky');
    });
    it('Should toggle stock favorite correctly',()=>{
      fixture.detectChanges();

      expect(component.stock.favorite).toBeFalsy();
      let addToFavoriteBtnEl=fixture.debugElement.query(By.css('.btn'));
     expect(addToFavoriteBtnEl).toBeDefined();
     addToFavoriteBtnEl.triggerEventHandler('click',null);

      fixture.detectChanges();
      expect(component.stock.favorite).toBeTruthy();
      addToFavoriteBtnEl=fixture.debugElement.query(By.css('.btn'));
      expect(addToFavoriteBtnEl).toBeNull();
    });
   });
 });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angularapp');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angularapp!');
  });
});
