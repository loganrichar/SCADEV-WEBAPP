import { Component, OnInit, Injector, Input } from '@angular/core';
import { LocationsServiceService } from '../Locations-Service.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { stringify } from 'querystring';


@Component({
  selector: 'app-Week-Bar',
  templateUrl: './Week-Bar.component.html',
  styleUrls: ['./Week-Bar.component.css'],
  providers:[LocationsServiceService]
})
export class WeekBarComponent implements OnInit {
@Input() facilityID: string;
@Input() date: string;
  constructor(private _sharedService: LocationsServiceService, private router: Router) { }
  public showMonday;
  public showTuesday ;
  public showWednesday ;
  public showThursday ;
  public showFriday ;
  public showSaturday ;
  public showSunday ;

  ngOnInit() {
    this.loadDays();
  }
  loadDays(){
    
    let today = new Date().toISOString().slice(0, 10)
    this._sharedService.GetLocationData(this.facilityID, this.date).subscribe(data => {
      
      let LocationData = data.data;
      this.showMonday = data.data.filter(u => u.monday == "OFF" && u.teammateType == "Anesthesia").length;
      this.showTuesday = data.data.filter(u => u.tuesday == "OFF" && u.teammateType == "Anesthesia").length;
      this.showWednesday = data.data.filter(u => u.wednesday == "OFF" && u.teammateType == "Anesthesia").length;
      this.showThursday = data.data.filter(u => u.thursday == "OFF" && u.teammateType == "Anesthesia").length;
      this.showFriday = data.data.filter(u => u.friday == "OFF" && u.teammateType == "Anesthesia").length;
      this.showSaturday = data.data.filter(u => u.saturday == "OFF" && u.teammateType == "Anesthesia").length;

      });
    

      
  }

  
}
