import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ApprovedLoans } from '../ApprovedLoans1';
import { ApprovedloanService } from '../approvedloan.service';
import { LoanApplicationStatus } from '../LoanApplicationStatus';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-approved-details',
  templateUrl: './approved-details.component.html',
  styleUrls: ['./approved-details.component.css']
})
export class ApprovedDetailsComponent implements OnInit {

  status_id:any;

  constructor(private apprloanservice:ApprovedloanService, private ar : ActivatedRoute,private sservice:StatusService,
    private router: Router) { 
    this.status_id=this.ar.snapshot.params['id'];
  }

  apprLoans: ApprovedLoans={} as any;
  
  loanstatus: LoanApplicationStatus={} as any;
 
  fill(){
      this.sservice.getById(this.status_id)
      .subscribe((data : any)=>{
        this.apprLoans.application_status=data;
        this.loanstatus=data;
      }
      );
  }

  emidetails = new FormGroup({
    // approved_id:new FormControl(''),
    // emi_amount:new FormControl(''),
    loan_interest:new FormControl(''),
    emi_starting_date:new FormControl('')
    // application_status:new FormControl('')
  });

  onSubmit(){
    console.log("inside submit");
   // this.apprLoans=new ApprovedLoans(6.8,this.emidetails.get('emi_starting_date').value,this.loanstatus)

    console.log(this.apprLoans)
    this.apprloanservice.postDetails(this.apprLoans)
    .subscribe((() => {
      console.log("Successfully added!!");
    }))
    this.router.navigate(['/adminhome/approvedloans']);
  }

  ngOnInit(): void {
    this.fill();
  }

}
