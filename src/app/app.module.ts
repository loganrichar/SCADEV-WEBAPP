import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationsServiceService } from './Locations-Service.service';
import { CompanyViewComponent } from './Company-View/Company-View.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SelectedCompanyCalendarViewComponent } from './Selected-Company-Calendar-View/Selected-Company-Calendar-View.component';
import { WeekBarComponent } from './Week-Bar/Week-Bar.component';
@NgModule({
   declarations: [
      AppComponent,
      routingComponents,
      CompanyViewComponent,
      SelectedCompanyCalendarViewComponent,
      WeekBarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      LocationsServiceService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }


