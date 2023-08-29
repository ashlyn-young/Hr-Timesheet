import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TopNavComponent } from './top-nav/top-nav.component';
import { DepartmentsComponent } from '../components/departments/departments.component';
import { TimesheetComponent } from '../components/timesheet/timesheet.component';
import { AnalyticsComponent } from '../components/analytics/analytics.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DepartmentsComponent,
    TimesheetComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
