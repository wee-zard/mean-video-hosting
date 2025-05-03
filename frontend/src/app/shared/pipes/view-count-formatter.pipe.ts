import { Pipe, PipeTransform } from '@angular/core';

type ValueFormatter = {
  value: string;
  plural: boolean;
};

export const getValueAndPlural = (value: number): ValueFormatter => {
  if (value < 1000) {
    const plural = value > 1;
    return {
      value: value.toString(),
      plural,
    };
  }

  if (value < 1000000) {
    const reducedView = Math.floor(value / 1000);
    const plural = reducedView > 1;
    return {
      value: `${reducedView}K`,
      plural,
    };
  }

  const reducedView = Math.floor(value / 1000000);
  const plural = reducedView > 1;
  return {
    value: `${reducedView}M`,
    plural,
  };
};

@Pipe({
  name: 'viewCountFormatter',
})
export class ViewCountFormatterPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    const res = getValueAndPlural(value);
    return `${res.value} view${res.plural ? 's' : ''}`;
  }
}
