import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionSlice',
})
export class DescriptionSlicePipe implements PipeTransform {
  transform(value: string, words: number = 20): string {
    if (!value) return '';
    const descriptionWords = value.split(' ');
    if (descriptionWords.length <= words) return value;
    return descriptionWords.slice(0, words).join(' ') + '...';
  }
}
