import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {


  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getRemoteData(){
return this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot');
}
}

