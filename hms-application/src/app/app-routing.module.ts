import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { DoctorhomeComponent } from './components/doctorhome/doctorhome.component';
import { OptionComponent } from './components/option/option.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { DoctorUpdateComponent } from './components/doctor-update/doctor-update.component';
import { UpdateComponent } from './components/patient-update/update.component';


const routes: Routes = [
  {path:"login" , component:LoginComponent},
  {path:"option" , component:OptionComponent},
  {path:"patienthome", component:HomeComponent},
  {path:"doctorhome", component:DoctorhomeComponent},
  {path:"addPatient", component:AddPatientComponent},
  {path:"adddoctor", component:AddDoctorComponent},
  {path:"updatedoctor", component:DoctorUpdateComponent},
  {path:"updatepatient", component:UpdateComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
