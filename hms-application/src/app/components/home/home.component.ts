import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patientService';
import { Patient } from 'src/app/models/Patient'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  patient:any;
  userId:Number;
  object:any;
  patientList:Patient[];
  constructor (private patientService:PatientService,private router:Router){ }
  savepatient() {
  this.router.navigate(['/addPatient']);
 }
 updatepatient() {
  this.router.navigate(['/updatepatient']);
 }
 public show:boolean = false;
 public buttonName:any = 'delete';

 toggle() {
   this.show = !this.show;
 }

 deletepatient(userId:Number) {
  this.patientService.deletePatient(userId).subscribe(data =>{
    this.patient=data;
    this.router.navigate(['/option']);
    this.show = !this.show;
  });
 }
 ngOnInit(){
  this.patientService.getPatient().subscribe(data =>{
    this.object=data;
    this.patientList = this.object.object;
    console.log(this.patientList);
  });
}
}
