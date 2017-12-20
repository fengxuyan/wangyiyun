import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


declare let mui:any;
declare let $:any;
@Component({
  selector: 'app-course-rank',
  templateUrl: './course-rank.component.html',
  styleUrls: ['./course-rank.component.scss']
})
export class CourseRankComponent implements OnInit {
  rank0: any;
  constructor(private http: HttpClient) {}



  getRankData() {
    this.rank0 = [];
    this.http.get('../../assets/rank0.json').subscribe(
      data => {
        this.rank0 = data['result'];
        console.log(this.rank0);
        return this.rank0;
      },
      err => {
        console.log('Something went wrong!');
      }
    );
  }

  ngOnInit() {
    mui.init();
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005
    });
    this.getRankData();
  }

}
