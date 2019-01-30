import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchingpageService {

  constructor(private http: HttpClient) { }

  loadData(query: string): any {
    query = this.prepareQuery(query);
    const params_config = {
      params: {
        command: 'prepareSearch',
        query: query
      }
    };
    return this.http.post<any>('http://localhost:8080/redist', params_config);
  }

  prepareQuery(query: string): string {
    return query.replace(' ', '+');
  }
}
