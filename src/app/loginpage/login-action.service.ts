import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionHolder } from './../session/sessionholder';
import { Observable } from 'rxjs';
import { EnviromentVariables } from '../variablesholder/variables';

@Injectable({
  providedIn: 'root'
})
export class LoginActionService {

  constructor(private http: HttpClient) { }

  authenticateUser(login: string, password: string): any {
    const hostPath = EnviromentVariables.getLocation();
    const params = {
      params: {
        login: login,
        password: password
      }
    };
    return this.http.post<any>(`${hostPath}/loginaction`, params);
  }

  createLocalSession(login: string): void {
    const sessionHolder = SessionHolder.getInstance();
    sessionHolder.addSession(login);
  }
}
