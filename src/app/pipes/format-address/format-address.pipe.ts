import { Pipe, PipeTransform } from '@angular/core';
import {IAddress} from "../../models";

@Pipe({
  name: 'formatAddress',
  standalone: true
})
export class FormatAddressPipe implements PipeTransform {

  public transform(value: IAddress): string {
    if (!value) {
      return '-';
    }

    return `${value.address_line_1}, ${value.locality}, ${value.country}, ${value.postal_code}`;
  }

}
