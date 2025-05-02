import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uploadTimeFormatter',
})
export class UploadTimeFormatterPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const date = new Date(value).getTime();

    if (isNaN(date)) {
      return '';
    }

    const currentDate = Date.now();
    const difference = Math.floor((currentDate - date) / 1000);

    // Is the difference less then 60 seconds?
    if (difference < 60) {
      const plural = difference > 1 ? 's' : '';
      return `${difference} second${plural} ago`;
    }

    // Is the difference less then 60 minutes?
    if (difference < 3600) {
      const time = Math.floor(difference / 60);
      const plural = time > 1 ? 's' : '';
      return `${time} minute${plural} ago`;
    }

    // Is the difference less then 24 hours?
    if (difference < 86400) {
      const time = Math.floor(difference / 3600);
      const plural = time > 1 ? 's' : '';
      return `${time} hour${plural} ago`;
    }

    // Is the difference less then 30 days?
    if (difference < 2592000) {
      const time = Math.floor(difference / 86400);
      const plural = time > 1 ? 's' : '';
      return `${time} day${plural} ago`;
    }

    // Is the difference less then 12 months?
    if (difference < 31104000) {
      const time = Math.floor(difference / 2592000);
      const plural = time > 1 ? 's' : '';
      return `${time} month${plural} ago`;
    }

    const time = Math.floor(difference / 31557600);
    const plural = time > 1 ? 's' : '';
    return `${time} year${plural} ago`;
  }
}
