import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../layouts/dashboard/pages/users/models';


@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: Student, ...args: unknown[]): unknown {
    return value.name + ' ' + value.surname;
  }

}
