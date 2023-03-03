import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(value: any,searchtearm:any): any {
    return value.filter(function(searchh){
      console.log(searchh.name.toLowerCase().indexOf(searchtearm.toLowerCase()),searchh.name.toLowerCase());
      console.log(searchh.name.toLowerCase()==searchtearm.toLowerCase());
      
      
      return searchh.name.toLowerCase().indexOf(searchtearm.toLowerCase()) > -1;
      // return searchh.name.toLowerCase()==searchtearm.toLowerCase();

    });
  }

}
