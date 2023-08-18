import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestaurentDashComponent } from './restaurent-dash/restaurent-dash.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login',pathMatch: 'full' //loging.component.html
  },
  {
   path: 'login', component: LoginComponent //login.
  },
 {
   path: 'signup', component: SignupComponent //signup
 }, 
 {
   path:'restaurent' , component: RestaurentDashComponent //rest-dash.component.html
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
