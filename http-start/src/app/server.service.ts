import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  addServers(servers: any[]) {
    return this.http.post('https://udemy-ng-http-b22d5.firebaseio.com/data.json', servers);
  }
}
