import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldCompanyAddress',
  standalone: true
})
export class BoldCompanyAddressPipe implements PipeTransform {

  public transform(value: string): string {
    if (!value) {
      return '-';
    }

    const segments: string[] = value.split(' - ');

    return `<strong>${segments[0]}</strong> - ${segments[1]}`;
  }

}
