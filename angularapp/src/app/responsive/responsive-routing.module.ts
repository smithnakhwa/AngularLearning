import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponsivebodyComponent } from './responsivebody/responsivebody.component';
import { ResponsiveheaderComponent } from './responsiveheader/responsiveheader.component';
import { CalculatorComponent } from './responsivesidebar/calculator/calculator.component';
import { CampaignComponent } from './responsivesidebar/campaign/campaign.component';
import { FunnelsComponent } from './responsivesidebar/funnels/funnels.component';
import { MerchantsComponent } from './responsivesidebar/merchants/merchants.component';
import { OverviewComponent } from './responsivesidebar/overview/overview.component';
import { ReportsComponent } from './responsivesidebar/reports/reports.component';


const routes: Routes = [
  {path:'',component:ResponsivebodyComponent
, children:[
  {path:'overview',component:OverviewComponent},
  {path:'funnels',component:FunnelsComponent},
  {path:'merchants',component:MerchantsComponent},

  {path:'reports',component:ReportsComponent},

  {path:'campaign',component:CampaignComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'#carouselExampleControls',component:FunnelsComponent},


  
 ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsiveRoutingModule { }
