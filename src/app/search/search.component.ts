import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
declare let mui:any;
declare let $:any;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  hotQueryDatas: any;
  constructor(private http: HttpClient) {
  }
  getHotQueryDatas() {
    this.http.get('../../assets/getHotQueryDatas.json').subscribe(
      data => {
        this.hotQueryDatas = data['result'];
        // console.log(this.hotQueryDatas);
        return this.hotQueryDatas;
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
    this.getHotQueryDatas();
  }
}
