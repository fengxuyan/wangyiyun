import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// 路由

import {HttpClientModule } from '@angular/common/http';

import {HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './share/header/header.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
// import { CourseRankComponent } from './course-rank/course-rank.component';
import { RegisterComponent } from './register/register.component';



import { LazyLoadImageModule } from '../assets/js/lazyload-image.module';
import { AppRoutingModule } from './app-routing.module';


// import { CourseRankModule } from './course-rank/course-rank.module';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    SearchComponent,
    CategoryComponent,
    // CourseRankComponent,
    // LoginComponent,
    RegisterComponent,
    // ForgetPwdComponent,
  ],
  imports: [
    // HttpModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LazyLoadImageModule,
    AppRoutingModule,
    // ShareModule
    // CourseRankModule
    // LoginModule,
    // ForgetPwdModule
  ],
  exports:[HeaderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
