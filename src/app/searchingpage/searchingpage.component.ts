import { Component, OnInit } from '@angular/core';
import { SearchingpageService } from '../searchingpage/searchingpage.service';
import { SessionHolder } from './../session/sessionholder';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { RegexPickDialogComponent } from './regex-pick-dialog/regex-pick-dialog.component';
import { DialogHelperService } from './../dialog-helper.service';
import { RegexDialogData } from './regex-pick-dialog/regex-dialog-data';
import { RegexClickDirective } from './regex-click.directive';

@Component({
  selector: 'app-searchingpage',
  templateUrl: './searchingpage.component.html',
  styleUrls: ['./searchingpage.component.css']
})
export class SearchingpageComponent implements OnInit {

  private query = '';
  private regexList: Array<RegexDialogData> = new Array<RegexDialogData>();

  constructor(private service: SearchingpageService,
              private router: Router,
              private dialog: MatDialog,
              private dialogHelper: DialogHelperService) { }

  ngOnInit() {
    // this.beforeInit();
  }

  private beforeInit(): void {
    if (!this.checkIsSessionExist()) {
      this.router.navigate(['/login']);
    }
  }

  private checkIsSessionExist(): boolean {
    const sessionHolder = SessionHolder.getInstance();
    return sessionHolder.checkIsAnySessionExits();
  }

  public onSearchButtonClick(query: string): void {
    this.service.loadData(query).subscribe( response => {
      if (response) {
        alert(response.success);
      }
    },
    error => { alert('Some error was handled');
    });
  }

  public openRegexPickDialog(): void {
    this.dialogHelper.openRegexPickDialog(this.initNewRegexUnit(), (result: RegexDialogData) => {
      this.regexList.push(result);
    });
  }

  private initNewRegexUnit(): RegexDialogData {
    const regexUnit: RegexDialogData = {
      name: '',
      query: ''
    };
    return regexUnit;
  }

}
