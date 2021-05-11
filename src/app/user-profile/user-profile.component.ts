import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../user/User';
import { UserhomeService } from '../userhome.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  
  title = "For User Operations";
  userdetails : User= {} as any;
  userdetails2 : User= {} as any;
  user = new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    full_Name:new FormControl('',[Validators.required]),
    gender: new FormControl('') ,
    age : new FormControl('',[Validators.required]),
    phoneno:new FormControl('',[Validators.required]),
    addr : new FormControl('',[Validators.required]),
    state : new FormControl('',[Validators.required]),
    city : new FormControl('',[Validators.required]),
    pin : new FormControl('',[Validators.required]),
    emp_type: new FormControl(''),
    salary: new FormControl('',[Validators.required]),
    aadhar : new FormControl('',[Validators.required]),
    pan: new FormControl('',[Validators.required])

  })
  constructor(private uservice:UserhomeService,private tokenStorageService: TokenStorageService) { }
  
  // @Output() sendToParent = new EventEmitter();

  viewprofile=true;
  formVisible = false;
  popupVisible = false;
  editbutton = true;
  email : any;

  ngOnInit(): void {
    //this.userdetails = this.tokenStorageService.getUser();
    this.retrieveProfile();
    // this.onEdit();
    this.email=this.userdetails.user_email;
  }
  onSubmit(){
    this.uservice.update(this.userdetails);
    this.formVisible = false;
    this.popupVisible = true;
    this.editbutton = false;
  }
  onEdit(){
    //this.userdetails=this.uservice.getByEmail().subscribe();
    this.editbutton=false;
    this.formVisible = true;
    this.viewprofile=false;
    console.log("onEdit");
    return this.uservice.getByEmail().subscribe(((data: any) => {
      this.userdetails = data;
      console.log(this.userdetails);
    }));
  }
  retrieveProfile(){
    //this.userdetails=this.uservice.getByEmail().subscribe();
    this.formVisible = false;
    console.log("onEdit");
    return this.uservice.getByEmail().subscribe(((data: any) => {
      this.userdetails = data;
      console.log(this.userdetails);
    }));
  }
}
