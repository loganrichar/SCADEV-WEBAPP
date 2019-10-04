/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WeekBarComponent } from './Week-Bar.component';

describe('WeekBarComponent', () => {
  let component: WeekBarComponent;
  let fixture: ComponentFixture<WeekBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
