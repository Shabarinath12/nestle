import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {LayoutModule} from "@angular/cdk/layout";
import { AppRoutingModule } from './app-routing.module';
import { MainpageComponent } from '../pages/mainpage/mainpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginpageComponent } from '../pages/loginpage/loginpage.component';
import { BannerComponent } from './component/banner/banner.component';
import { SignupComponent } from '../pages/signup/signup.component';
 

 

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    NavbarComponent,
    LoginpageComponent,
    BannerComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    LayoutModule,
    FormsModule, ReactiveFormsModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
