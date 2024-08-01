import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './../Login';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Response } from '../Response';
import { pessoas } from '../../../db';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`

  constructor(private http: HttpClient) { }

  login(loginData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, loginData);
  }
}
