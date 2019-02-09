import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { RegexPickDialogComponent } from './searchingpage/regex-pick-dialog/regex-pick-dialog.component';
import { RegexDialogData } from './searchingpage/regex-pick-dialog/regex-dialog-data';

@Injectable({
  providedIn: 'root'
})
export class DialogHelperService {

  constructor(private dialog: MatDialog) { }

  public openRegexPickDialog(data: RegexDialogData, callback: Function): void {
    const dialogRef: MatDialogRef<RegexPickDialogComponent> = this.getDialogRef(data);

    dialogRef.afterClosed().subscribe(
      (result) => {
        callback(result);
      }
    );
  }

  private getDialogRef(data: RegexDialogData): MatDialogRef<RegexPickDialogComponent> {
    return this.dialog.open(RegexPickDialogComponent, {
      width: '300px',
      data: data
    });
  }
}
