import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5GrandParentComponent } from './scenario5-grand-parent.component';

describe('Scenario5GrandParentComponent', () => {
  let component: Scenario5GrandParentComponent;
  let fixture: ComponentFixture<Scenario5GrandParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5GrandParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5GrandParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
