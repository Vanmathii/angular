import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/Patient';
import { PatientService } from 'src/app/services/patientService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  roleId:number;
  userId: number;
  firstName: String;
  lastName:String;
  userAge:number;
  userMobileNumber:String;
  addressLine1:String;
  addressLine2:String;
  addressLine3:String;
  userName:String;
  password:String;
  disease:String;
  bloodGroup:String;
  patient:Patient = new Patient;
  constructor (private patientService:PatientService,private router:Router){ }

  ngOnInit() {
  }
  addpatient()
  {
   this.patient.roleId=this.roleId;  
   this.patient.userAge=this.userAge;  
   this.patient.firstName=this.firstName;  
   this.patient.lastName=this.lastName;  
   this.patient.userMobileNumber=this.userMobileNumber;  
   this.patient.addressLine1=this.addressLine1;  
   this.patient.addressLine2=this.addressLine2;  
   this.patient.addressLine3=this.addressLine3;
   this.patient.userName=this.userName;
   this.patient.password=this.password;
   this.patient.disease=this.disease;
   this.patient.bloodGroup=this.bloodGroup;
   console.log(this.patient);
   this.patientService.savePatient(this.patient).subscribe(data =>{
    this.patient=data;
    this.router.navigate(['/patienthome']);
  });
  }
}
