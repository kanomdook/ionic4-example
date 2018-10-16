import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public persons: Array<any> = [];

  constructor(private navCtrl: NavController,
    private userService: UserService
  ) {
    this.loadUser();
  }

  onKeywordChange(e) {
    console.log(e);
  }

  openDetail(person) {
    this.userService.selcetedUser = person;
    this.navCtrl.navigateForward('/detail');
  }

  async loadUser() {
    const persons = await this.userService.getUsers();
    this.persons = persons.results;
    console.log(this.persons);
  }
}
