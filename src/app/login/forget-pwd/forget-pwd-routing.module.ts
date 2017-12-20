import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LazyComponent } from './lazy.component';
// import { LazyPageComponent } from './lazy-page/lazy-page.component';

import { ForgetPwdComponent } from './forget-pwd.component';


const routes: Routes = [
  {
    path: '',
    component: ForgetPwdComponent,
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
export class ForgetPwdRoutingModule { }
