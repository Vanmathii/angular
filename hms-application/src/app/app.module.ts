import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DoctorhomeComponent } from './components/doctorhome/doctorhome.component';
import { OptionComponent } from 'src/app/components/option/option.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { UpdateComponent } from './components/patient-update/update.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { DoctorUpdateComponent } from './components/doctor-update/doctor-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DoctorhomeComponent,
    OptionComponent,
    AddPatientComponent,
    UpdateComponent,
    AddDoctorComponent,
    DoctorUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
