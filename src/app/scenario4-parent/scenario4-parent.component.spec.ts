import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario4ParentComponent } from './scenario4-parent.component';

describe('Scenario4ParentComponent', () => {
  let component: Scenario4ParentComponent;
  let fixture: ComponentFixture<Scenario4ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario4ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario4ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
