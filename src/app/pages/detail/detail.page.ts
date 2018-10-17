import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  person: any = {};

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.person = this.userService.selcetedUser;
    const email = this.route.snapshot.paramMap.get('email');
    console.log(email);
    this.person = this.userService.searchUserFromEmail(email);
    console.log(this.person);
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

}
