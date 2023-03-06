import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Test2Component } from "./test2.component";

describe('test2 component',()=>{
    let fixture,component;
    beforeEach(async(()=>{
     TestBed.configureTestingModule({
            declarations:[Test2Component],
        
        }).compileComponents();
    }));
    beforeEach(()=>{
        fixture=TestBed.createComponent(Test2Component);
        component=fixture.componentInstance;
        component.firstName='Rocky';
        fixture.detectChanges();
    });
    // it('should create test2 componet and render firstName',()=>{
    //     const nameEl=fixture.debugElement.query(By.css('.name'));
    //     expect(nameEl.nativeElement.textContent).toEqual('Rocky');
    // });

});