import { Component, OnInit } from '@angular/core';
import { LogoutService } from './logout.service';
import { SessionHolder } from '../session/sessionholder';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private logoutService: LogoutService) { }

  ngOnInit() {
  }

  doLogOutProcedure(): any {
    const activeLogin = SessionHolder.getInstance().getActiveLogin();
    this.logoutService.sendLogoutRequest(activeLogin)
      .subscribe( response => {
        if (response.success === 'true') {
          SessionHolder.getInstance().removeSession(activeLogin);
        }
      });
  }

}
