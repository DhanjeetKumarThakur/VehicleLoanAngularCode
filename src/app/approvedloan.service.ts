import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ApprovedLoans } from './ApprovedLoans1';

@Injectable({
  providedIn: 'root'
})
export class ApprovedloanService {

  constructor(private httpservice:HttpClient) { }

  private postemidetails="http://localhost:8989/approved/create";

  postDetails(apprLoans: ApprovedLoans){

    return this.httpservice.post(this.postemidetails,apprLoans).
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
