import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return value;

    const [year, month, day] = value.split('-');
    return `${day}/${month}/${year}`;
  }

}
