import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraComponent } from './camera/camera.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MoblieComponent } from './moblie/moblie.component';
import { ProductComponent } from './product.component';
import { WatchComponent } from './watch/watch.component';
import { RouterModule } from '@angular/router';
import { UtilityModule } from '../sharedModule/utility/utility.module';



@NgModule({
  declarations: [ ProductComponent,
    MoblieComponent,
    LaptopComponent,
    WatchComponent,
    CameraComponent,

  ],
  imports: [
    RouterModule,
    CommonModule,
    UtilityModule
    
  ]
})
export class ProductModule { }
