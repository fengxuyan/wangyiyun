import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';


import { IndexComponent } from './index/index.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
// import { CourseRankComponent } from './course-rank/course-rank.component';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { ForgetPwdComponent } from './login/forget-pwd/forget-pwd.component';

// import { ShareModule } from './share/share.module';



export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  }
  , {
    path: 'index',
    component: IndexComponent
  }
  , {
    path: 'search',
    component: SearchComponent
  }
  , {
    path: 'category/:id',
    component: CategoryComponent
  }
  , {
    path: 'courseRank',
    loadChildren: './course-rank/course-rank.module#CourseRankModule'
  },

  {
    path: 'login/register',
    component: RegisterComponent
  }
  ,
  {
    path: 'login/forgetPwd',
    // component: ForgetPwdComponent
    loadChildren: './login/forget-pwd/forget-pwd.module#ForgetPwdModule'
  },
  {
    path:"login",
    loadChildren: './login/login.module#LoginModule'
  }
  // ,
  // {
  //   path: 'login/forgetPwd',
  //   component: ForgetPwdComponent
  // }

,
  {
    path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule'
  },

];
@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
