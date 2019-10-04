/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocationsServiceService } from './Locations-Service.service';

describe('Service: LocationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationsServiceService]
    });
  });

  it('should ...', inject([LocationsServiceService], (service: LocationsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
