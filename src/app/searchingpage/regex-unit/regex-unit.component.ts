import { Component, OnInit, Input } from '@angular/core';
import { RegexDialogData } from '../regex-pick-dialog/regex-dialog-data';

@Component({
  selector: 'app-regex-unit',
  templateUrl: './regex-unit.component.html',
  styleUrls: ['./regex-unit.component.css']
})
export class RegexUnitComponent implements OnInit {

  @Input('data') data: RegexDialogData;

  constructor() { }

  ngOnInit() {
  }

}
