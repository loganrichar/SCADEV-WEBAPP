

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyViewComponent } from './Company-View/Company-View.component';
import { SelectedCompanyCalendarViewComponent } from './Selected-Company-Calendar-View/Selected-Company-Calendar-View.component';
import {WeekBarComponent} from './Week-Bar/Week-Bar.component'
const routes: Routes = [
  {path: '', redirectTo: 'Locations', pathMatch: 'full' },
  {path: 'Locations', component: CompanyViewComponent},
   {path: 'SelectedLocation/:id/:date', component: SelectedCompanyCalendarViewComponent}//,
  // {path: 'AddEmployee', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CompanyViewComponent, SelectedCompanyCalendarViewComponent, WeekBarComponent]//, SingleCardComponent, AddComponent]

