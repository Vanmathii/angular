import { Injectable } from '@angular/core';
import { Patient } from '../models/Patient';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService
{
  private getPatientUrl: string;
  private addPatientUrl: string;
  private getPatientByIdUrl: string;
  private updatePatientUrl : string;
  private deletePatientUrl : string;
 
  constructor(private http: HttpClient) {
    this.getPatientUrl = 'http://localhost:8080/patients/all';
    this.addPatientUrl = "http://localhost:8080/patients/createpatient";
    this.getPatientByIdUrl ="http://localhost:8080/patients/id/";
    this.updatePatientUrl = "http://localhost:8080/patients/updatepatient";
    this.deletePatientUrl ="http://localhost:8080/patients/deleteuser/";

  }
 
  public getPatient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.getPatientUrl);
  }
  public savePatient(patient: Patient) {
    console.log(patient);
    return this.http.post<Patient>(this.addPatientUrl, patient);
  }
  public deletePatient(userId: Number) {
    console.log(userId);
    this.deletePatientUrl=this.deletePatientUrl.concat(userId.toString());
    console.log(this.deletePatientUrl);
    return this.http.put(this.deletePatientUrl,userId);
   }

  public getPatientById(userId:number): Observable<Patient> {
    this.getPatientByIdUrl=this.getPatientByIdUrl.concat(userId.toString());
    console.log(this.getPatientByIdUrl);
    return this.http.get<Patient>(this.getPatientByIdUrl);
  }
  public updateDoctor(patient: Patient) {
    console.log(patient);
    return this.http.post<Patient>(this.updatePatientUrl, patient);
  }
}
