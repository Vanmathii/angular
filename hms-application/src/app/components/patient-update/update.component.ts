import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/Patient';
import { PatientService } from 'src/app/services/patientService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
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
  bloodGroup:String;
  disease:String;
  patient:Patient = new Patient;
  object:any;
  constructor (private doctorService:PatientService,private router:Router){ }
  ngOnInit() {
  }
  getPatientById()
  {
    this.patient.userId=this.userId;
    this.doctorService.getPatientById(this.userId).subscribe(data =>{
      this.object=data;    
    this.patient=this.object.object;
    console.log(this.patient);
    });
  }
  updatepatient(firstName:string,lastName:string,userAge:number,userMobileNumber:string,addressLine1:string,addressLine2:string,addressLine3:string,userName:string,password:String,disease:string,bloodGroup:string )
  {
   this.patient.firstName=firstName;  
   this.patient.lastName=lastName;  
   this.patient.userAge=userAge; 
   this.patient.userMobileNumber=userMobileNumber;  
   this.patient.addressLine1=addressLine1;  
   this.patient.addressLine2=addressLine2;  
   this.patient.addressLine3=addressLine3;
   this.patient.userName=userName;
   this.patient.password=password;
   this.patient.disease=disease;
   this.patient.bloodGroup=bloodGroup;
   console.log(this.patient);
   this.doctorService.updateDoctor(this.patient).subscribe(data =>{
   this.patient=data;
   this.router.navigate(['/patienthome']);
  });
  }
}


