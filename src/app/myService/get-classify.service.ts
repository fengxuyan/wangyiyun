import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()
export class GetClassifyService {

  constructor(private http: HttpClient) {
  }
  getClassifyData(): any {
    this.http.get('../../assets/classify.json').subscribe(
      data => {
        return data;
      }
    );
  }
}
