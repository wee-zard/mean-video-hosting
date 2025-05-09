import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isoDateTimeFormatter',
})
export class IsoDateTimeFormatterPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const dates = value.split('T');
    const resDate = dates[0].replaceAll('-', '/');
    const resTime = dates[1].split('.')[0];
    return `${resDate} ${resTime}`;
  }
}
