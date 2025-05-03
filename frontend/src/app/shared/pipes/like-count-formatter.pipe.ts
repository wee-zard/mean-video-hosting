import { Pipe, PipeTransform } from '@angular/core';
import { getValueAndPlural } from './view-count-formatter.pipe';

@Pipe({
  name: 'likeCountFormatter',
})
export class LikeCountFormatterPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    const res = getValueAndPlural(value);
    return res.value;
  }
}
