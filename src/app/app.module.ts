import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { routing } from './app.routes'
import LoginComponent from './components/login/login.component'
import AppointmentComponent from './components/appointments/appointments.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
