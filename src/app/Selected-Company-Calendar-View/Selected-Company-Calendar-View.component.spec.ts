/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelectedCompanyCalendarViewComponent } from './Selected-Company-Calendar-View.component';

describe('SelectedCompanyCalendarViewComponent', () => {
  let component: SelectedCompanyCalendarViewComponent;
  let fixture: ComponentFixture<SelectedCompanyCalendarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedCompanyCalendarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedCompanyCalendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
