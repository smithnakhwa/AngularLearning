import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsivebodyComponent } from './responsivebody/responsivebody.component';
import { ResponsiveheaderComponent } from './responsiveheader/responsiveheader.component';
import { ResponsivesidebarComponent } from './responsivesidebar/responsivesidebar.component';
import { ResponsiveRoutingModule } from './responsive-routing.module';
import { OverviewComponent } from './responsivesidebar/overview/overview.component';
import { FunnelsComponent } from './responsivesidebar/funnels/funnels.component';
import { MerchantsComponent } from './responsivesidebar/merchants/merchants.component';
import { ReportsComponent } from './responsivesidebar/reports/reports.component';
import { CampaignComponent } from './responsivesidebar/campaign/campaign.component';
import { CalculatorComponent } from './responsivesidebar/calculator/calculator.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HtmlPipe } from '../html.pipe';


@NgModule({
  declarations: [
    ResponsiveheaderComponent,
    ResponsivesidebarComponent,
    ResponsivebodyComponent,
    OverviewComponent,
    FunnelsComponent,
    MerchantsComponent,
    ReportsComponent,
    CampaignComponent,
    CalculatorComponent,
    HtmlPipe
    

  ],
  imports: [
    CommonModule,
    ResponsiveRoutingModule,
    NgbCarouselModule, 

  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ResponsiveModule { }
