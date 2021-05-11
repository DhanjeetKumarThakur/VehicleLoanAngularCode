import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprovedLoanComponent } from './approved-loan/approved-loan.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './home/home.component';
import { LoanApplyComponent } from './loan-apply/loan-apply.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { TotalLoginComponent } from './total-login/total-login.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { HowToApplyCarLoanComponent } from './how-to-apply-car-loan/how-to-apply-car-loan.component';
import { Home1Component } from './home1/home1.component';
import { FAQComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserComponent } from './user/user.component';
import { LoanapplicationdetailsComponent } from './loanapplicationdetails/loanapplicationdetails.component';
import { ViewloanComponent } from './viewloan/viewloan.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    ApprovedLoanComponent,
    LoanApplyComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    TotalLoginComponent,
    LoanApplicationComponent,
    HowToApplyCarLoanComponent,
    Home1Component,
    FAQComponent,
    ContactComponent,
    MainHomeComponent,
    UserProfileComponent,
    UserhomeComponent,
    UserComponent,
    LoanApplicationComponent,
    LoanapplicationdetailsComponent,
    ViewloanComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
