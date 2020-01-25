import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctorService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

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
  adddoctor()
  {
   this.doctor.roleId=this.roleId;  
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
   this.doctorService.saveDoctor(this.doctor).subscribe(data =>{
    this.doctor=data;
    this.router.navigate(['/doctorhome']);
  });
  }
}