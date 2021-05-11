import { Component, OnInit } from "@angular/core";
import { LoanApplicationStatus } from "../LoanApplicationStatus";
import { StatusService } from "../status.service";


@Component({
    selector: 'Rejected-Loans',
    templateUrl: './RejectedLoanApplicatonretrieve.html',
    styleUrls: ['./adminhome.component.css']
})

export class RejectedApplicationsComponent implements OnInit{

    constructor(private statservice:StatusService){}
    ngOnInit(): void {
        this.getapplications();
    }
    rejectedapplications:LoanApplicationStatus[]=[];
    
    getapplications(){
        this.statservice.getAllRejectedLoans()
        .subscribe(((data: any) => {
            console.log(data);
            this.rejectedapplications = data;
          }))
    }

}