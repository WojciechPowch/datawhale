import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { SearchingpageComponent } from './searchingpage/searchingpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LogoutService } from './mainpage/logout.service';
import { SessionHolder } from './session/sessionholder';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datawhale';

  constructor(private logoutService: LogoutService,
              private router: Router) {}

  doLogOutProcedure(): any {
    const sessionHolder = SessionHolder.getInstance();
    const activeLogin = sessionHolder.getActiveLogin();
    this.logoutService.sendLogoutRequest(activeLogin)
      .subscribe( response => {
        if (response.success === 'true') {
          SessionHolder.getInstance().removeSession(activeLogin);
          this.router.navigate(['/login']);
        }
      });
  }

  showLogoutBlock(): boolean {
    const sessionHolder = SessionHolder.getInstance();
    return sessionHolder.checkIsAnySessionExits();
  }
}
