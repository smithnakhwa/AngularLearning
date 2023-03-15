import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import{CommonModule} from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
import { CustomDirective } from './custom.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//angular material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {  MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { StudentformComponent } from './studentform/studentform.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RegformComponent } from './regform/regform.component';
import { ReactiveregformComponent } from './reactiveregform/reactiveregform.component';
import { PrototypereactiveformComponent } from './prototypereactiveform/prototypereactiveform.component';
import { ScrollComponent } from './scroll/scroll.component';
import { HttpClientModule } from '@angular/common/http';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { CustompipePipe } from './custompipe.pipe';
import { SearchpipePipe } from './searchpipe.pipe';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { StockComponent } from './stock/stock.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { MoblieComponent } from './product/moblie/moblie.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { WatchComponent } from './product/watch/watch.component';
import { CameraComponent } from './product/camera/camera.component';
import { BooksComponent } from './books/books.component';
import { ReminderofhimComponent } from './books/reminderofhim/reminderofhim.component';
import { DoglapanComponent } from './books/doglapan/doglapan.component';
import { VictorycityComponent } from './books/victorycity/victorycity.component';
import { Cote2Component } from './books/cote2/cote2.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { DemouserComponent } from './demouser/demouser.component';
import { DemouserdetailsComponent } from './demouserdetails/demouserdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ProductModule } from './product/product.module';
import { OrdersModule } from './orders/orders.module';
import { FashionComponent } from './fashion/fashion.component';
import { FashiondetailsComponent } from './fashiondetails/fashiondetails.component';
import { JeansComponent } from './fashion/jeans/jeans.component';
import { TShirtsComponent } from './fashion/t-shirts/t-shirts.component';
import { ShirtsComponent } from './fashion/shirts/shirts.component';
import { ShoesComponent } from './fashion/shoes/shoes.component';
import { FashionmoduleModule } from './fashion/fashionmodule.module';
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';
import { TodoComponent } from './todo/todo.component';
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
    NgstylengclassComponent,
    StudentformComponent,
    ReactiveformComponent,
    RegformComponent,
    ReactiveregformComponent,
    PrototypereactiveformComponent,
    ScrollComponent,
    PipeexampleComponent,
    CustompipePipe,
    SearchpipePipe,
    ProductFilterComponent,
    StockComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    CreateStockComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    PagenotfoundComponent,
    BooksComponent,
    ReminderofhimComponent,
    DoglapanComponent,
    VictorycityComponent,
    Cote2Component,
    DemopostComponent,
    DemopostdetailsComponent,
    DemouserComponent,
    DemouserdetailsComponent,
    UserdetailsComponent,
    FashiondetailsComponent,
    TodoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ProductModule,
    OrdersModule,
    FashionmoduleModule,

    

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(){
    console.log('App Calling');
    
   }
 }
