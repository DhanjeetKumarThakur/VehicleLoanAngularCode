import { LoanApplications } from "./LoanApplForAdmin";

export interface LoanApplicationStatus
{
    application_status_id:number;
    status:string;
    laon_app:LoanApplications;
}