import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewCountFormatter',
})
export class ViewCountFormatterPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (value < 1000) {
      const plural = value > 1 ? 's' : '';
      return `${value} view${plural}`;
    }

    if (value < 1000000) {
      const reducedView = Math.floor(value / 1000);
      const reducedViewCount = reducedView;
      const plural = reducedView > 1 ? 's' : '';
      return `${reducedViewCount}K view${plural}`;
    }

    const reducedView = Math.floor(value / 1000000);
    const plural = reducedView > 1 ? 's' : '';
    const reducedViewCount = reducedView;
    return `${reducedViewCount}M view${plural}`;
  }
}
