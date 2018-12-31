import { Pipe, PipeTransform } from '@angular/core';
import { v } from '@angular/core/src/render3';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propertyName: string): any {
    // debugger;
    if (value.length === 0 || filterString === '' ) {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propertyName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
