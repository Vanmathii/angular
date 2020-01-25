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
  constructor (private doctorService:DoctorService,private router:Router){ }
  ngOnInit() {
  }
  getDoctorById()
  {
    this.doctor.userId=this.userId;
    this.doctorService.getDoctorById(this.userId).subscribe(data =>{
    this.doctor=data;
    console.log(this.doctor);
    });
  }
  updatedoctor(userName:string,password:String,userAge:Number,userMobileNumber:string,addressLine1:string,addressLine2:string,addressLine3:string,specialization:string,firstName:string,lastName:string)
  {
   this.doctor.userAge=this.userAge;  
   this.doctor.firstName=this.firstName;  
   this.doctor.lastName=this.lastName;  
   this.doctor.userMobileNumber=this.userMobileNumber;  
   this.doctor.userAddressLine1=this.addressLine1;  
   this.doctor.userAddressLine2=this.addressLine2;  
   this.doctor.userAddressLine3=this.addressLine3;
   this.doctor.userName=this.userName;
   this.doctor.password=this.password;
   this.doctor.specialization=this.specialization;
   console.log(this.doctor);
   this.doctorService.updateDoctor(this.doctor).subscribe(data =>{
    this.doctor=data;
    this.router.navigate(['/doctorhome']);
  });
  }
}
