import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanApplicationsService } from '../loan-applications.service';
import { LoanApplicationStatus } from '../LoanApplicationStatus';
import { StatusService } from '../status.service';


@Component({
  selector: 'DetailsComponent',
  templateUrl:'./Detailspage.html',
   
  styleUrls: ['./adminhome.component.css']
})
export class DetailsComponent implements OnInit {
  
  ngOnInit(): void {
    this.getApplication();
  }
  loan_app1:any;
  loan_id:any;
  msg:string="";
  status_id:number;
  statusUpdate:LoanApplicationStatus={} as any;

  constructor(private ar : ActivatedRoute, private loanservice:LoanApplicationsService,private sservice:StatusService,
    private router: Router){
    this.loan_id=this.ar.snapshot.params['id'];
    this.status_id=this.ar.snapshot.params['status_ID']
 }
 rejectedStatus(){
  this.statusUpdate.status="Rejected";
  this.sservice.statusChange(this.statusUpdate).subscribe(()=>console.log("Changed to rejected"));
  this.router.navigate(['/adminhome/rejectedloans']);
 }
 getApplication(){
    this.loanservice.getLoanApplicationById(this.loan_id).subscribe((data: any) => {
    this.loan_app1 = data;
  })
  this.sservice.getById(this.status_id).subscribe((data: any) => {
    this.statusUpdate = data;
    console.log(this.statusUpdate);
 })
}
 approvedStatus(){
   this.statusUpdate.status="Approved";
  this.sservice.statusChange(this.statusUpdate).subscribe(()=>console.log("Changed to approved"));
  this.router.navigate(['/emidetails',this.status_id]);
}
//  approvedStatus(){
//     this.sservice.statusChange(this.status_id,"Approved").subscribe(()=>console.log("Changed to approved"));
//  }
  
}