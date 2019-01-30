import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) { }

  sendLogoutRequest(login: string): Observable<any> {
    const params = {
      params: {
        login: login
      }
    };
    return this.http.post<any>('http://localhost:8080/logout', params);
  }
}
