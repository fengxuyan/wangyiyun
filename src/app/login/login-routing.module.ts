import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LazyComponent } from './lazy.component';
// import { LazyPageComponent } from './lazy-page/lazy-page.component';

import { LoginComponent } from './login.component';
import { ForgetPwdComponent } from './forget-pwd/forget-pwd.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // children: [
    //   {
    //     path: 'forgetPwd',
    //     component: ForgetPwdComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
