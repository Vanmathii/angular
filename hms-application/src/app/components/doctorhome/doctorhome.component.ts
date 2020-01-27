import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctorService';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctorhome',
  templateUrl: './doctorhome.component.html',
  styleUrls: ['./doctorhome.component.scss']
})
export class DoctorhomeComponent implements OnInit {
  object:any;
  doctorList:Doctor[];
  constructor (private doctorService:DoctorService,private router:Router){ }
  ngOnInit(){
    this.doctorService.getDoctor().subscribe(data =>{
    this.object=data;
    this.doctorList = this.object.object;
    console.log(this.doctorList);
  });
}
  savedoctor() {
    this.router.navigate(['/adddoctor']);
   }
   updatedoctor() {
    this.router.navigate(['/updatedoctor']);
   }
   public show:boolean = false;
 public buttonName:any = 'delete';

 toggle() {
   this.show = !this.show;
   if(this.show)  
     this.buttonName = "Delete";
   else
     this.buttonName = "delete";
 }
 deletedoctor(userId:Number) {
  this.doctorService.deleteDoctor(userId).subscribe(data =>{
    this.object=data;
    this.router.navigate(['/option']);
    this.show = !this.show;
 });
}
}
