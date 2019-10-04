



import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationsServiceService {
constructor(private http: HttpClient) { }
  getLocations(): Observable<[]>{
    return (this.http.get<any>('http://scadevjobs.com/api/Locations'));

  }
  GetLocationData(facilityId, dayofWeek): Observable<any>{
    return (this.http.get<any>('http://scadevjobs.com/api/Schedules/' + facilityId + '/' + dayofWeek));
  }
  
  
}

