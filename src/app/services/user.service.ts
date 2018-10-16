import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selcetedUser: any;

  constructor(private http: HttpClient) { }

  async getUsers() {
    const result: any = await this.http.get<User>('https://randomuser.me/api/?results=50').toPromise();
    return result;
  }
}
