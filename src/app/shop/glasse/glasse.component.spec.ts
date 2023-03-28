/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GlasseComponent } from './glasse.component';

describe('GlasseComponent', () => {
  let component: GlasseComponent;
  let fixture: ComponentFixture<GlasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
