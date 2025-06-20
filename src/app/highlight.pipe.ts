import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
