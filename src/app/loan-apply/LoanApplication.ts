import { User } from "../user/User";


export class LoanApplication {

	user:User;
		loan_tenure:number;
		loan_amount:number;
		vehicle_brand:string;
		vehicle_model:string;
		vehicle_type:string;
		vehicle_colour:string;
		vehicle_exshowroom_price:string;
		vehicel_on_road_price:string;
	constructor(
		user:User,
		loan_tenure:number,
		loan_amount:number,
		vehicle_brand:string,
		vehicle_model:string,
		vehicle_type:string,
		vehicle_colour:string,
		vehicle_exshowroom_price:string,
		vehicel_on_road_price:string
		){
			
		this.user=user;
				this.loan_tenure=loan_tenure;
				this.loan_amount=loan_amount;
				this.vehicle_brand=vehicle_brand;
				this.vehicle_model=vehicle_model;
				this.vehicle_type=vehicle_type;
				this.vehicle_colour=vehicle_colour;
				this.vehicle_exshowroom_price=vehicle_exshowroom_price;
				this.vehicel_on_road_price=vehicel_on_road_price;
				}
	

	
 }