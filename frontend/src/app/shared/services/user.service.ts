import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { BaseResponse } from '../models/response/BaseResponse';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  server: string = environment.serverUrl;

  getHeaderWithCredential() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
      withCredentials: true,
    };
  }

  login(email: string, password: string): Promise<BaseResponse> {
    const body = new URLSearchParams();
    body.set('username', email);
    body.set('password', password);

    return lastValueFrom(
      this.http.post<BaseResponse>(
        `${this.server}/login`,
        body,
        this.getHeaderWithCredential(),
      ),
    );
  }

  register(user: User) {
    /*
      // HTTP POST request
      const body = new URLSearchParams();
      body.set('email', user.email);
      body.set('name', user.name);
      body.set('address', user.address);
      body.set('nickname', user.nickname);
      body.set('password', user.password);

      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      return this.http.post('http://localhost:5000/app/register', body, {headers: headers});
      */
  }
}
