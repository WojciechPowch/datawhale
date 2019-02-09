import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { RegexDialogData } from './regex-dialog-data';

@Component({
  selector: 'app-regex-pick-dialog',
  templateUrl: './regex-pick-dialog.component.html',
  styleUrls: ['./regex-pick-dialog.component.css']
})
export class RegexPickDialogComponent implements OnInit {
  private acceptMode: boolean;

  constructor(public dialogRef: MatDialogRef<RegexPickDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: RegexDialogData) { }

  ngOnInit() {
    this.checkIsAcceptMode();
  }

  private checkIsAcceptMode(): void {
    this.acceptMode = this.data.name === '';
  }

  public cancelClick(): void {
    this.dialogRef.close();
  }

}
