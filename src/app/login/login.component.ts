import { Component, OnInit } from '@angular/core';
import {GetUrlParmsService} from '../myService/getUrlParms.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';



declare let mui:any;
declare let $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [GetUrlParmsService],

})
export class LoginComponent implements OnInit {

  urlParams: any;
  constructor(private getUrlParams: GetUrlParmsService ,  private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    mui.init();
    $('#login').bind('click',function () {

      var account = $('#account').val();
      var pwd     = $('#password').val();
      if('feng'===account&&'feng'===pwd){
        console.log('hellow');
      }
  })
    this.urlParams = this.getUrlParams.getParams();

    console.log(this.urlParams);

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .subscribe((event) => {
        console.log('NavigationEnd:', event);
      });
}
}
