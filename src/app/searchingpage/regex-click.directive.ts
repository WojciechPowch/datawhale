import { Directive, Input, HostListener } from '@angular/core';
import { RegexDialogData } from './regex-pick-dialog/regex-dialog-data';
import { DialogHelperService } from './../dialog-helper.service';

@Directive({
  selector: '[appRegexClick]'
})
export class RegexClickDirective {

  @Input('appRegexClick') data: RegexDialogData;

  constructor(private dialogHelper: DialogHelperService) { }

  @HostListener('click')
  onRegexItemClick() {
    this.dialogHelper.openRegexPickDialog(this.data, this.getDialogFunction());
  }

  private getDialogFunction(): Function {
    return (result: RegexDialogData) => {};
  }

}
