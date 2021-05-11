import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoanApplicationStatus } from "../LoanApplicationStatus";
import { StatusService } from "../status.service";


@Component({
    selector: 'Pending-Loans',
    templateUrl: './Pendingapplicationsretrieve.html',
    styleUrls: ['./adminhome.component.css']
})

export class PendingApplicationsComponent implements OnInit{
    constructor(private statservice:StatusService,private router: Router){ }
    ngOnInit(): void {
       this.onclick()
    }
    pendingapplications:LoanApplicationStatus[]={} as any;
    
    
    onclick()
    {
        this.statservice.getAllPendingLoans()
        .subscribe(((data: any) => {
            this.pendingapplications = data;
          }))
    }
    onSelectId(p: any,statusId: any){
        console.log("Inside onSelectId")
        this.router.navigate(['/selectedId',p.loan_applicaton_id,statusId]);
    }
   
   
}