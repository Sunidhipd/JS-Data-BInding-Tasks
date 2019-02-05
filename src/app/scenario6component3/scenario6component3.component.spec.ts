import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6component3Component } from './scenario6component3.component';

describe('Scenario6component3Component', () => {
  let component: Scenario6component3Component;
  let fixture: ComponentFixture<Scenario6component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
