import { Component, OnInit, Injector, Input } from '@angular/core';
import { LocationsServiceService } from '../Locations-Service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-Selected-Company-Calendar-View',
  templateUrl: './Selected-Company-Calendar-View.component.html',
  styleUrls: ['./Selected-Company-Calendar-View.component.css']
})
export class SelectedCompanyCalendarViewComponent implements OnInit {
  @Input() id;
  
  public LocationData =[];
public bindableLocationData = [];

  constructor(private _sharedService: LocationsServiceService, private router: Router, private route: ActivatedRoute) { }
  @Input() facility ;
  @Input() selectedDate;
  public weekOf;
  ngOnInit() {
    var d = new Date(this.selectedDate);
    d.setDate(d.getDate()+7);
    var eee = new Date(d).toLocaleDateString().toString().replace("/","-").replace("/","-");
    this.selectedDate = eee;
    this._sharedService.GetLocationData(this.facility.facilityID, this.selectedDate).subscribe(data => {
    this.LoadCalendarView(data);});
    this.weekOf = this.selectedDate;
  }

  nextWeek(event){
    var d = new Date(this.selectedDate);
    d.setDate(d.getDate()+7);
    var eee = new Date(d).toLocaleDateString().toString().replace("/","-").replace("/","-");
    this.selectedDate = eee;
    this._sharedService.GetLocationData(this.facility.facilityID, this.selectedDate).subscribe(data => {
      this.LoadCalendarView(data);});
    }
  LoadCalendarView(LocationData){
    if(this.LocationData.length == 0){
      this.LocationData = LocationData.data;
    }
    this.LocationData = LocationData.data;
    this.bindableLocationData = this.LocationData;
  }

  lastWeek(){
    var d = new Date(this.selectedDate);
    d.setDate(d.getDate()-7);
    var eee = new Date(d).toLocaleDateString().toString().replace("/","-").replace("/","-");
    this.selectedDate = eee;
    this._sharedService.GetLocationData(this.facility.facilityID, this.selectedDate).subscribe(data => {
      this.LoadCalendarView(data);});
  }
}
