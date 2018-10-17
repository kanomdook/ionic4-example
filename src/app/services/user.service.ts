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
    if (this.remoteData) {
      const user = this.remoteData.results.find((item: any) => {
        return item.email === email;
      });

      return user;
    }

    return undefined;
  }
}
