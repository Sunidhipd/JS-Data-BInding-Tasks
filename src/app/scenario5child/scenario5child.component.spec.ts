import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5childComponent } from './scenario5child.component';

describe('Scenario5childComponent', () => {
  let component: Scenario5childComponent;
  let fixture: ComponentFixture<Scenario5childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
