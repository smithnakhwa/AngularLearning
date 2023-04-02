import { Pipe, PipeTransform } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';

import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'html'
})
export class HtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  transform(value: any, ...args: any[]): any {
    console.log(this.sanitized.bypassSecurityTrustHtml(value))
    return this.sanitized.bypassSecurityTrustHtml(value);
  }

}
