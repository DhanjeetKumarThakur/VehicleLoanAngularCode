import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {​​​​​​​​ retry, catchError, map }​​​​​​​​ from'rxjs/operators';
import { LoanApplicationStatus } from './LoanApplicationStatus';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private pendingloans:string="http://localhost:8989/status/pending";
  private changestatus="http://localhost:8989/status/updateById";
  private getStatusById="http://localhost:8989/status/"
  private getRejected="http://localhost:8989/status/rejected";
  private getApproved="http://localhost:8989/status/approved";
  constructor(private httpservice:HttpClient) { }
  getAllPendingLoans():Observable<any>  {
    return this.httpservice.get(this.pendingloans).
    pipe( retry(1), catchError(this.myerrorhandler));

  }
  getAllApprovedLoans():Observable<any>  {
    return this.httpservice.get(this.getApproved).
    pipe( retry(1), catchError(this.myerrorhandler));

  }
  getAllRejectedLoans():Observable<any>  {
    return this.httpservice.get(this.getRejected).
    pipe( retry(1), catchError(this.myerrorhandler));

  }
  statusChange(status: LoanApplicationStatus):any{
    return this.httpservice.put(this.changestatus,status);

  }
  getById(id: string | number):Observable<any>{
    return this.httpservice.get(this.getStatusById + id);
  }
  // statusChange(id,msg):any{
  //   const httpparams=new HttpParams({
  //     fromObject:{
  //       id: id,
  //       msg: msg
  //     }
  //   })
  //   return this.httpservice.put(this.changestatus,{params:HttpParams})
  // }
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

