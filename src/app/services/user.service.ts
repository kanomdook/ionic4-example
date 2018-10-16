import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selcetedUser: any;
  remoteData: User;

  constructor(private http: HttpClient) { }

  async getUsers() {
    const result: any = await this.http.get<User>('https://randomuser.me/api/?results=50').toPromise();
    this.remoteData = result;
    return result;
  }

  searchUserFromEmail(email) {
    this.remoteData.results.find((item) => {
      return false;
    });
  }
}
