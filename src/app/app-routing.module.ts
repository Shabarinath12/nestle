import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from '../pages/mainpage/mainpage.component';
 import { LoginpageComponent } from '../pages/loginpage/loginpage.component';
import { SignupComponent } from 'src/pages/signup/signup.component';



const routes: Routes = [
  {path:'',component:MainpageComponent},
  {path:'login',component:LoginpageComponent},
  {path:'signup',component:SignupComponent}

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
