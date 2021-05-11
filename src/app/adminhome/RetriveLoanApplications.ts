import { Component, OnInit } from "@angular/core";
import { LoanApplicationsService } from "../loan-applications.service";
import { LoanApplications } from "../LoanApplForAdmin";


@Component({
    selector: 'Loan-Applications',
    templateUrl: './Loanapplicationsretrieve.html',
    styleUrls: ['./adminhome.component.css']
})

export class LoanApplicationsComponent implements OnInit{
    ngOnInit(): void {
    this.onclick()
    // this.search()
    }
    
    applications:LoanApplications[]={} as any;
    
   constructor(private loanservice:LoanApplicationsService)
   {
       
   }
   onclick()
   {
       console.log("Inside onclick")
       return this.loanservice.getAllLoanApplications()
       .subscribe(((data: any) => {
            console.log(data);
            this.applications = data;
          }))
       
   }

}