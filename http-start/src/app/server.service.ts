import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// noinspection TsLint
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  addServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http-b22d5.firebaseio.com/data.json',
    //   servers, {headers: headers}
    // );

    return this.http.put('https://udemy-ng-http-b22d5.firebaseio.com/data.json',
      servers, {headers: headers}
    );
  }

  getServers() {
    return this.http.get('https://udemy-ng-http-b22d5.firebaseio.com/data.json')
      .map((response: Response) => {
        const data = response.json();
        for (const s of data) {
          s.name = 'FETCHED_' + s.name;
        }
        return data;
      })
      .catch( (error: Response) => {
        return Observable.throw('Something went wrong');
    });
  }

  getAppName() {
    return this.http.get('https://udemy-ng-http-b22d5.firebaseio.com/appName.json').
      map( (response: Response) => {
        return response.json();
    });
  }
}
