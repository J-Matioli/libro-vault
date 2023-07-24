import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrToString'
})
export class ArrToStringPipe implements PipeTransform {

  transform(value: any[], separator: string = ''): string {
    return value.join(separator + ' ');
  }

}
