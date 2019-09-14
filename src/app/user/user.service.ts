import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.url);
  }
}
