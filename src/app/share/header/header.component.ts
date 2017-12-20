import { Component, OnInit } from '@angular/core';


declare let $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showitems(){
    alert('hello');
    console.log('123');
  }

}
