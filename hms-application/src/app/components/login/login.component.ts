import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/Patient';
import { PatientService } from 'src/app/services/patientService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: String;
  ngOnInit() { }
  constructor(private router: Router) { }
  option() {
    this.router.navigate(['/option']);
  }
  // patienthomepage(){
  //   this.router.navigate(['/patienthome']);
  // }
}
