import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regisration-page',
  templateUrl: './regisration-page.component.html',
  styleUrls: ['./regisration-page.component.css']
})
export class RegisrationPageComponent implements OnInit {
  email: string;
  password: string;
  login: string;
  nip: string;

  constructor() { }

  ngOnInit() {
  }

}
