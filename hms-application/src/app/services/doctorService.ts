import { Injectable } from '@angular/core';
import { Doctor } from '../models/Doctor';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService
{
  private getDoctorUrl: string;
  private getDoctorByIdUrl: string;
  private addDoctorUrl: string;
  private updateDoctorUrl:string;
  private deleteDoctorUrl:string;
  constructor(private http: HttpClient) {
    this.getDoctorUrl = 'http://localhost:8080/doctor/all';
    this.addDoctorUrl = "http://localhost:8080/doctor/create";
    this.updateDoctorUrl = "http://localhost:8080/doctor/update";
    this.getDoctorByIdUrl = "http://localhost:8080/doctor/id/";
    this.deleteDoctorUrl = "http://localhost:8080/doctor/delete/";
  }
 
  public getDoctor(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.getDoctorUrl);
  }
  public getDoctorById(userId:number): Observable<Doctor> {
    this.getDoctorByIdUrl=this.getDoctorByIdUrl.concat(userId.toString());
    console.log(this.getDoctorByIdUrl);
    return this.http.get<Doctor>(this.getDoctorByIdUrl);
  }
  public deleteDoctor(userId: Number) {
    console.log(userId);
    this.deleteDoctorUrl=this.deleteDoctorUrl.concat(userId.toString());
    console.log(this.deleteDoctorUrl);
    return this.http.put(this.deleteDoctorUrl,userId);
   }

  public saveDoctor(doctor: Doctor) {
    console.log(doctor);
    return this.http.post<Doctor>(this.addDoctorUrl, doctor);
  }
  public updateDoctor(doctor: Doctor) {
    console.log(doctor);
    return this.http.post<Doctor>(this.updateDoctorUrl, doctor);
  }
}
