import { Injectable } from '@angular/core';
import { Component , OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params , CanActivate} from '@angular/router';

@Injectable()
export class GetUrlParmsService implements OnInit {
  localUrl: any;

  constructor(private activatedRoute: ActivatedRoute) {}
  getParams(): any{
    // 获取路由参数
    // http://localhost:4201/post?id=12&name=zhangsan
    // this.activatedRoute.params
    this.activatedRoute.params.subscribe((params: Params) => {
      // let userId = params['userId'];
      // console.log(params);
      this.localUrl = params;
      console.log(this.localUrl);


    });
    return  this.localUrl;
  }

  ngOnInit(){

 this.getParams();
  }
}
