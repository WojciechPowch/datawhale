import { Component, OnInit } from '@angular/core';
import { SearchingpageService } from '../searchingpage/searchingpage.service';
import { SessionHolder } from './../session/sessionholder';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchingpage',
  templateUrl: './searchingpage.component.html',
  styleUrls: ['./searchingpage.component.css']
})
export class SearchingpageComponent implements OnInit {

  constructor(private service: SearchingpageService,
              private router: Router) { }

  query = '';

  ngOnInit() {
    /*if (!this.checkIsSessionExist()) {
      this.router.navigate(['/login']);
    }*/
  }

  checkIsSessionExist(): boolean {
    const sessionHolder = SessionHolder.getInstance();
    return sessionHolder.checkIsAnySessionExits();
  }

  onSearchButtonClick(query: string): void {
    this.service.loadData(query).subscribe( response => {
      if (response) {
        alert(response.success);
      }
    },
    error => { alert('Some error was handled');
    });
  }

}
