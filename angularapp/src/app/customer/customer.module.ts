import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { RouterModule, Routes } from '@angular/router';
const customerRoutes:Routes=[
  {path:'',component:CustomerListComponent}
]

@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    RouterModule.forChild(customerRoutes),
  ]
})
export class CustomerModule {
  constructor(){
    console.log('Customer Calling');
    
   }
 }
