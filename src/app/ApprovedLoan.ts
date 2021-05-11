import { LoanApplicationStatus } from "./LoanApplicationStatus";

export class ApprovedLoan {
    constructor(
        public emi_amount:number,
        public loan_interest:number,
        public emi_starting_date:number,
        public application_status:number
    )
    {

    }
   

}