import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BooksComponent } from './books/books.component';
import { Cote2Component } from './books/cote2/cote2.component';
import { DoglapanComponent } from './books/doglapan/doglapan.component';
import { ReminderofhimComponent } from './books/reminderofhim/reminderofhim.component';
import { VictorycityComponent } from './books/victorycity/victorycity.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DemoComponent } from './demo/demo.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { DemouserComponent } from './demouser/demouser.component';
import { DemouserdetailsComponent } from './demouserdetails/demouserdetails.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MoblieComponent } from './product/moblie/moblie.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},//http:localhost:4200-->''
  {path:'home',component:HomeComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'product', 
  children:[
    {path:'',component:ProductComponent},//http://localhost:4200/product-->''
    {path:'mobile',component:MoblieComponent},
    {path:'camera',component:CameraComponent},
    {path:'laptop',component:LaptopComponent},
    {path:'watch',component:WatchComponent},
  ]
},
{path:'books',
children:[
  {path:'',component:BooksComponent},
  {path:'cote2',component:Cote2Component},
  {path:'doglapan',component:DoglapanComponent},
  {path:'victorycity',component:VictorycityComponent},
  {path:'reminderofhim',component:ReminderofhimComponent},


]
},
{
 path:'post',component:DemopostComponent
},
{path:'postdetails/:id',component:DemopostdetailsComponent},
{path:'user',component:DemouserComponent},
{path:'userdetails/:id',component:DemouserdetailsComponent},


  {path:'**',component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
