import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, sortProperty: string): any {
    if (value.lenght === 0 || !sortProperty ) {
      return value;
    }
    return value.sort( (a, b) => {
      if (a[sortProperty] > b[sortProperty]) {
        return 1 ;
      }
      if (a[sortProperty] < b[sortProperty]) {
        return -1;
      }
      return 0;
    });
  }

}
