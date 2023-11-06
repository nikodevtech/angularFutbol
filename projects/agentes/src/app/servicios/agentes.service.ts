import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentesService {

  API_URL = 'https://reqres.in/api/';
  
  constructor(private httpClient: HttpClient) { }

  get(): Observable<any>{
    return this.httpClient.get(this.API_URL + 'users');
  }

  getAgenteById(id: number): Observable<any>{
    return this.httpClient.get(this.API_URL + 'users/' + id);
  }
  

}
