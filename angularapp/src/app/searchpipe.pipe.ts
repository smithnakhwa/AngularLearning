import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(value: any,searchtearm:any): any {
    return value.filter(function(searchh){
      return searchh.name.toLowerCase().indexOf(searchtearm.toLowerCase()) > -1;

    });
  }

}
