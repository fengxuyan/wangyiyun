import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseRankComponent } from './course-rank.component';

const routes: Routes = [
  {
    path: '',
    component: CourseRankComponent,
    // children: [
    //   {
    //     path: 'lazypage',
    //     component: LazyPageComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRankRoutingModule { }
