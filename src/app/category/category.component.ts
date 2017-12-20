import {Component, OnInit} from '@angular/core';
import {GetUrlParmsService} from '../myService/getUrlParms.service';
import {HttpClient , HttpParams} from '@angular/common/http';
declare let mui:any;
declare let $:any;



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [GetUrlParmsService],
})
export class CategoryComponent implements OnInit {
  urlParams: string;
  getsLists: any;
  getsAllcategory: any;
  requestdata: any;
  cus: any;
  html: any;
  _left: any;

  constructor(private getUrlParams: GetUrlParmsService  , private http: HttpClient) {
    this._left = 64;
  }

  requestThisCategory(id, event) {

    $('.u-alllists-item span').removeClass('txt-underline-color');
    /*$('.u-alllists-box').animate({'margin-left': '100px'});
    $(event.target).scrollLeft(1000);
    console.log($(event.target).scrollLeft());*/
    $(event.target).addClass('txt-underline-color');


    console.log(($(window).width()));

    // alert($(".u-alllists-item").scrollLeft()+this._left+" px");
    // $('.u-alllists-item').animate({'right': this._left + 'px'});


    console.log($(".u-alllists-item").scrollLeft()+this._left+" px");
    this._left+=64;



    if($(event.target)[0].id === '2') {
      const params = new HttpParams().set('id', id);
      // const params = new HttpParams().set('id', id).set('name', 'Windstorm');
      this.cus = this.http.get('../../assets/biancheng.json', {params}).subscribe(
        data => {
          this.requestdata = data['result'];
          return this.requestdata;
        },
        err => {
          console.log('Something went wrong!');
        }
      );
    }else{
      const params = new HttpParams().set('id', id);
      // const params = new HttpParams().set('id', id).set('name', 'Windstorm');
      this.cus = this.http.get('../../assets/chanpin.json', {params}).subscribe(
        data => {
          this.requestdata = data['result'];
          return this.requestdata;
        },
        err => {
          console.log('Something went wrong!');
        }
      );
    }


  }

  getCategoryLists() {
    this.getsLists = [];
    this.getsAllcategory = [];
    this.http.get('../../assets/category.json').subscribe(
      data => {
        this.getsLists = data['result'];
        // console.log('getsLists'+ this.getsLists);
        return this.getsLists;
      },
      err => {
        console.log('Something went wrong!');
      }
    );
    this.http.get('../../assets/allcategory.json').subscribe(
      data => {
        this.getsAllcategory = data['result']['frontCategoryDtoList'];
        console.log(data['result']['frontCategoryDtoList']);
        return this.getsAllcategory;
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
    this.getCategoryLists();
    this.urlParams = this.getUrlParams.getParams();
    // this.requestThisCategory(this.urlParams['id'],'click');

    const params = new HttpParams().set('id', this.urlParams['id']);
    this.cus = this.http.get('../../assets/biancheng.json', {params}).subscribe(
      data => {
        this.requestdata = data['result'];
        return this.requestdata;
      },
      err => {
        console.log('Something went wrong!');
      }
    );
  }
}
