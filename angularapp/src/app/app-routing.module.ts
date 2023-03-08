import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
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
  {path:'**',component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
