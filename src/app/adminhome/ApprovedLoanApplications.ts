import { Component } from "@angular/core";
import { LoanApplicationStatus } from "../LoanApplicationStatus";
import { StatusService } from "../status.service";


@Component({
    selector: 'Loan-Applications',
    templateUrl: './ApprovedLoanApplicationsretrieve.html',
    styleUrls: ['./adminhome.component.css']
})

export class ApprovedApplicationsComponent{
    constructor(private statservice:StatusService){}
    ngOnInit(): void {
        this.getapplications();
    }
    approvedapplications:LoanApplicationStatus[]={} as any;
    
    getapplications(){
        this.statservice.getAllApprovedLoans()
        .subscribe(((data: any) => {
            console.log(data);
            this.approvedapplications = data;
          }))
    }
   
}