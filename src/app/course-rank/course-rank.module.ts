import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CourseRankRoutingModule } from './course-rank-routing.module';
import { CourseRankComponent } from './course-rank.component';
// import { ShareModule } from '../share/share.module';

// import { HeaderComponent } from '../share/header/header.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    CourseRankRoutingModule,
    // ShareModule
  ],
  exports:[],
  declarations: [CourseRankComponent ]
})
export class CourseRankModule { }
