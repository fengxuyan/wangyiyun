import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetPwdComponent } from './forget-pwd.component';
import { ForgetPwdRoutingModule } from './forget-pwd-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ForgetPwdRoutingModule,
  ],
  declarations: [ForgetPwdComponent]
})
export class ForgetPwdModule { }
