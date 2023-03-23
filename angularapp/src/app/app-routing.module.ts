import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { BooksComponent } from './books/books.component';
import { Cote2Component } from './books/cote2/cote2.component';
import { DoglapanComponent } from './books/doglapan/doglapan.component';
import { ReminderofhimComponent } from './books/reminderofhim/reminderofhim.component';
import { VictorycityComponent } from './books/victorycity/victorycity.component';
import { CanDeactiveGuard } from './can-deactive.guard';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DemoComponent } from './demo/demo.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { DemouserComponent } from './demouser/demouser.component';
import { DemouserdetailsComponent } from './demouserdetails/demouserdetails.component';
import { FashionComponent } from './fashion/fashion.component';
import { JeansComponent } from './fashion/jeans/jeans.component';
import { ShirtsComponent } from './fashion/shirts/shirts.component';
import { ShoesComponent } from './fashion/shoes/shoes.component';
import { TShirtsComponent } from './fashion/t-shirts/t-shirts.component';
import { FashiondetailsComponent } from './fashiondetails/fashiondetails.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogincheckGuard } from './logincheck.guard';
import { LoginformComponent } from './loginform/loginform.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { OrderlistComponent } from './orders/orderlist/orderlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MoblieComponent } from './product/moblie/moblie.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';
import { RegformComponent } from './regform/regform.component';
import { ResolveGuard } from './resolve.guard';
import { StudentformComponent } from './studentform/studentform.component';
import { TodoComponent } from './todo/todo.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},//http:localhost:4200-->''
  {path:'home',component:HomepageComponent,canActivate:[LogincheckGuard]},
  {path:'aboutus', component: AboutusComponent},
  {path:'contactus', component: ContactusComponent,canDeactivate:[CanDeactiveGuard]},
  {path:'product', canActivate:[AuthGuard],
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
{path:'usersdetails',component:UserdetailsComponent,resolve:{data:ResolveGuard}},
{path:'Student',component:StudentformComponent},
{path:'order',component:OrderlistComponent},
{path:'fashion',
children:[
  {path:'',component:FashionComponent},
  {path:'jeans',component:JeansComponent},
  {path:'shirts',component:ShirtsComponent},
  {path:'shoes',component:ShoesComponent},
  {path:'t-shirts',component:TShirtsComponent}
]
},
{path:'admin',loadChildren:'./admin/admin.module#AdminModule'},
{path:'customer',loadChildren:'./customer/customer.module#CustomerModule'},
{path:'login',component:LoginscreenComponent,canDeactivate:[CanDeactiveGuard]},
{path:'cart',component:CartComponent},


{path:'fashiondetails/:id',component:FashiondetailsComponent},
{path:'todo',component:TodoComponent},

  {path:'**',component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
