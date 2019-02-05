import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5ParentComponent } from './scenario5-parent.component';

describe('Scenario5ParentComponent', () => {
  let component: Scenario5ParentComponent;
  let fixture: ComponentFixture<Scenario5ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
