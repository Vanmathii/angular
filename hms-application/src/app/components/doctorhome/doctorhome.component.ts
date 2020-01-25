import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctorService';
import{Form} from '@angular/forms'
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
  savedoctor() {
    this.router.navigate(['/adddoctor']);
   }
   updatedoctor() {
    this.router.navigate(['/updatedoctor']);
   }
   ngOnInit(){
  this.doctorService.getDoctor().subscribe(data =>{
    this.object=data;
    this.doctorList = this.object.object;
    console.log(this.doctorList);
  });
}
}
