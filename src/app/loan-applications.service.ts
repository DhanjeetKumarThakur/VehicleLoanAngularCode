import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// import { LoanApplication } from './loan-apply/LoanApplication';
// import { LoanApplicationsComponent } from './adminhome/RetriveLoanApplications';
import {​​​​​​​​ retry, catchError, map }​​​​​​​​ from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationsService {

  private allloanapplications:string="http://localhost:8989/loan/all";
  private getbyid="http://localhost:8989/loan/get/";

  constructor(private httpservice:HttpClient) { 

  }
  getAllLoanApplications():Observable<any>  {
    return this.httpservice.get(this.allloanapplications).
    pipe( retry(1), catchError(this.myerrorhandler));

  }
  getLoanApplicationById(id: string):Observable<any>  {
    return this.httpservice.get(this.getbyid+id).
    pipe( retry(1), catchError(this.myerrorhandler));

  }
  myerrorhandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
    }
}
