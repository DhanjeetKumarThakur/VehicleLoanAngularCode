import { LoanApplicationStatus } from "./LoanApplicationStatus";

export class ApprovedLoans{
    constructor(
        loan_interest:number,
    emi_starting_date:Date,
    application_status:LoanApplicationStatus
    ){
        this.loan_interest=loan_interest;
        this.emi_starting_date=emi_starting_date;
        this.application_status=application_status;
    }

    // approved_id:number;
    // emi_amount:number;
    loan_interest:number;
    emi_starting_date:Date;
    application_status:LoanApplicationStatus;
}
