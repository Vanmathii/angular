import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctorService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-update',
  templateUrl: './doctor-update.component.html',
  styleUrls: ['./doctor-update.component.scss']
})
export class DoctorUpdateComponent implements OnInit {
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
  specialization:String;
  doctor:Doctor = new Doctor;
  object:any;
  constructor (private doctorService:DoctorService,private router:Router){ }
  ngOnInit() {
  }
  getDoctorById()
  {
    this.doctor.userId=this.userId;
    this.doctorService.getDoctorById(this.userId).subscribe(data =>{
      this.object=data;    
    this.doctor=this.object.object;
    console.log(this.doctor);
    });
  }
  updatedoctor(firstName:string,lastName:string,userAge:number,userMobileNumber:string,addressLine1:string,addressLine2:string,addressLine3:string,userName:string,password:String,specialization:string )
  {
   this.doctor.firstName=firstName;  
   this.doctor.lastName=lastName;  
   this.doctor.userAge=userAge; 
   this.doctor.userMobileNumber=userMobileNumber;  
   this.doctor.addressLine1=addressLine1;  
   this.doctor.addressLine2=addressLine2;  
   this.doctor.addressLine3=addressLine3;
   this.doctor.userName=userName;
   this.doctor.password=password;
   this.doctor.specialization=specialization;
   console.log(this.doctor);
   this.doctorService.updateDoctor(this.doctor).subscribe(data =>{
   this.doctor=data;
   this.router.navigate(['/doctorhome']);
  });
  }
}
