import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../interfaces/address';

@Pipe({
  name: 'address',
  standalone: true
})
export class AddressPipe implements PipeTransform {

  transform(value: Address, ...args: unknown[]): unknown {
    return `${value.street} ${value.suite} ${value.city} ${value.zipcode} (${value.geo.lat} ${value.geo.lng})`
  }

}
