import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(countries:any[],value: string): any[] {
    // return values.filter(value =>value.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) )

    return countries.filter(c => c.name.common.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
  }

}
