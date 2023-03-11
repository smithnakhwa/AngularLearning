import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionComponent } from './fashion.component';
import { JeansComponent } from './jeans/jeans.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { ShoesComponent } from './shoes/shoes.component';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [    FashionComponent,JeansComponent,
    TShirtsComponent,
    ShirtsComponent,
    ShoesComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FashionmoduleModule { }
