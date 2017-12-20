import { Component, OnInit } from '@angular/core';
import {GetClassifyService} from '../myService';
import {HttpClient, HttpHeaders} from '@angular/common/http';


declare let mui:any;
declare let $:any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers : [GetClassifyService],
})

export class IndexComponent implements OnInit {
  gets: any;
  rank0: any;
  rank0ImgUrl: any;
  getsLists: any;
  defaultImage: any;

  constructor( private http: HttpClient) {

  }
  getClassifyData() {
    this.rank0 = [];
    this.rank0ImgUrl = '../../assets/images/wei';
    this.http.get('../../assets/classify.json').subscribe(
      data => {
        this.gets = data;
        for(var i in data) {
          if(0===data[i].pId){
            this.rank0.push(data[i]);
          }
        }
        return this.gets;
      },
      err => {
        console.log('Something went wrong!');
      }
    );
  }

  getClassifyLists() {
    this.getsLists = [];
    this.http.get('../../assets/classifyWYY.json').subscribe(
      data => {
        this.getsLists = data[0]['result']['sectionDtoList'];
        console.log(data[0]['result']['sectionDtoList']);
        return this.getsLists;
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

    var slider = mui("#slider");
    slider.slider({
      interval: 5000
    });
    let scroll = mui('.mui-scroll-wrapper').scroll();
    document.querySelector('.mui-scroll' ).addEventListener('scroll', function (e ) {
      if(-scroll.y>1000){
        $('.top').show();
        mui("div").on('tap','.top',function(){
          mui('.mui-scroll-wrapper').scroll().scrollTo(0,0,1000);
        })
      }else{
        $('.top').hide();
      }
    });
    this.defaultImage = '../../assets/images/loading.gif';
    this.getClassifyData();
    this.getClassifyLists();
    // mui('body').on('tap','a',function(){document.location.href=this.href;});
  }


}
