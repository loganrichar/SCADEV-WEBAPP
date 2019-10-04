
import { Component, OnInit, Injector, Input } from '@angular/core';
import { LocationsServiceService } from '../Locations-Service.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';




@Component({
  selector: 'app-Company-View',

  templateUrl: './Company-View.component.html',
  styleUrls: ['./Company-View.component.css'],
  providers: [LocationsServiceService]
})

export class CompanyViewComponent implements OnInit {
  public Locations = [];
  public bindableLocations = [];
  
  public selectedLocation;

  constructor(private _sharedService: LocationsServiceService, private router: Router) {}
  @Input()  PickedDate: string;
  public showTable = false;
  
  ngOnInit(): void {


    this.LoadDate();
//Set a localStorage object so I dont have to keep hitting the API
    let m = localStorage.getItem("Locations");
    if(localStorage.getItem("Locations") == null || localStorage.getItem("Locations") == undefined){
        this._sharedService.getLocations().subscribe(data => {
          localStorage.setItem("Locations", JSON.stringify(data));
          this.LoadView(data);});
    }
    else{
      this.LoadView(m);
    }
     
      
  }
public WeekMultiplier = 0
NextWeek(){
  var d = new Date(this.PickedDate);
  this.WeekMultiplier += 7;
  d.setDate(d.getDate()+this.WeekMultiplier + (1 + 7 - d.getDay()) % 7);
  let Day = (d.getDate());
  let Month = (d.getMonth() + 1);
  let Year = (d.getFullYear());
  this.PickedDate = Month + "-" + Day +"-"+Year
  this.ngOnInit();
}
LastWeek(){
  var d = new Date(this.PickedDate);
  this.WeekMultiplier -= 7;
  d.setDate(d.getDate()+this.WeekMultiplier + (1 + 7 - d.getDay()) % 7);
  let Day = (d.getDate());
  let Month = (d.getMonth() + 1);
  let Year = (d.getFullYear());
  this.PickedDate = Month + "-" + Day +"-"+Year
  this.ngOnInit();
}
  LoadDate(){
    if(this.PickedDate==undefined){
    let d: Date = new Date();
    let Day = (d.getDate());
    let Month = (d.getMonth() + 1);
    let Year = (d.getFullYear());
    this.PickedDate = Month + "-" + Day +"-"+Year
    }
    
  }
  LocationSelected = false;
  DateSelected = false;
  public CurrentLocation ;
  LoadView(Locationas){
    
      if(this.Locations.length == 0){
        this.Locations = Locationas.data;
      }
      this.Locations = JSON.parse(Locationas).data;
      this.bindableLocations = this.Locations;
      
  }
  
  setLocation(event, Location){
    
    this.showTable = false;
    this.selectedLocation = null;
    this.pushSelected(Location);
    this.selectedLocation = Location;
    this.DateSelected = true
    if(this.PickedDate != null && this.PickedDate != undefined){
      this.showTable = true;
    }
  }

DeselectDate(){
  this.selectedLocation = null;
  this.PickedDate = null;
  this.CurrentLocation.Selected = false;
}
  pushSelected(newLocation){
    if(this.CurrentLocation != undefined){
    this.CurrentLocation.Selected = false;
    }
    
    newLocation.Selected = true;
    this.CurrentLocation = newLocation;
  }

  SetDate(event){
    this.PickedDate = event.target.value.replace(/ /g, "-");
    
      this.DateSelected = true;
      if(this.selectedLocation != undefined && this.selectedLocation != undefined){
        this.showTable = true;
      }
  }
  
}

