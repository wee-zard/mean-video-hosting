import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoImagePath',
})
export class VideoImagePathPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const replacedUrl = value.replace(
      'https://www.youtube.com/embed/',
      'https://img.youtube.com/vi/',
    );
    return `${replacedUrl}/maxresdefault.jpg`;
  }
}
