import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './Scenario1/component1.component';
import { Component2Component } from './Scenario2/component2.component';
import { from } from 'rxjs';
import { Scenario3ChildComponent } from './scenario3-child/scenario3-child.component';
import { Scenario3ParentComponent } from './scenario3-parent/scenario3-parent.component';
import {FormsModule} from '@angular/forms';
import { Scenario4ParentComponent } from './scenario4-parent/scenario4-parent.component';
import { Scenario4ChildComponent } from './scenario4-child/scenario4-child.component';
import { Scenario5childComponent } from './scenario5child/scenario5child.component';
import { Scenario5GrandParentComponent } from './scenario5-grand-parent/scenario5-grand-parent.component';
import { Scenario5ParentComponent } from './scenario5-parent/scenario5-parent.component';
import { Scenario6component1Component } from './scenario6component1/scenario6component1.component';
import { Scenario6component2Component } from './scenario6component2/scenario6component2.component';
import { Scenario6component3Component } from './scenario6component3/scenario6component3.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Scenario3ChildComponent,
    Scenario3ParentComponent,
    Scenario4ParentComponent,
    Scenario4ChildComponent,
    Scenario5childComponent,
    Scenario5GrandParentComponent,
    Scenario5ParentComponent,
    Scenario6component1Component,
    Scenario6component2Component,
    Scenario6component3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
