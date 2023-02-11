import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { PasswordComponent } from './password/password.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { TravelngifswitchComponent } from './travelngifswitch/travelngifswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { InputComponent } from './input/input.component';
import { NgstylengclassComponent } from './ngstylengclass/ngstylengclass.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Test1Component,
    Test2Component,
    CardComponent,
    PasswordComponent,
    OutputDecoratorComponent,
    NgForComponent,
    NgifComponent,
    NgswitchComponent,
    TravelngifswitchComponent,
    NgstyleComponent,
    NgclassComponent,
    InputComponent,
    NgstylengclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
