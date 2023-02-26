import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveregform',
  templateUrl: './reactiveregform.component.html',
  styleUrls: ['./reactiveregform.component.css']
})
export class ReactiveregformComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterViewChecked,AfterViewInit,AfterContentChecked,AfterContentInit{
  myReactiveForm:FormGroup;
  levels=['Basic','Advanced','pro'];
  isSubmit:boolean;

            
  constructor() { 
   this.createForm();
  }

  ngOnInit(): void {
    console.log(`App reactiveregform- OnInit`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('App reactiveregform- OnChanges',changes)
  }
  ngOnDestroy(): void {
    console.log(`App reactiveregform- OnDestroy`);
  }
  ngDoCheck(): void {
    console.log(`App reactiveregform- DoCheck`);
  }
  ngAfterViewChecked(): void {
    console.log(`App reactiveregform- AfterViewChecked`);
  }
  ngAfterViewInit(): void {
    console.log(`App reactiveregform- AfterViewInit`);
  }
  ngAfterContentChecked(): void {
    console.log(`App reactiveregform- AfterContentChecked`);
  }
  ngAfterContentInit(): void {
    console.log(`App reactiveregform- AfterContentInit`);
  }
 
  createForm(){

    this.myReactiveForm=new FormGroup({
      'email':new FormControl(null,[Validators.email,Validators.required]),
      'select':new FormControl('Advanced'),
      'password':new FormControl(null,[Validators.required]),
      'date':new FormControl(null,[Validators.required]),
      


    })
  }
  onSubmit(){
    console.log(this.myReactiveForm.value);
    this.isSubmit=true;
    
  }
  newdate(){
    let dat=new Date();
    let mon;
    if(dat.getMonth()<10){
      mon='0'+dat.getMonth();

    }
    else{
      mon=dat.getMonth();
    }
    return dat.getFullYear()+'-'+mon+'-'+dat.getDate();
  }
}
