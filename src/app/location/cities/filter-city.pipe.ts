import { Pipe, PipeTransform } from '@angular/core';

import { City } from './city';

@Pipe({
  name: 'filterCityByName',
})
export class FilterCityPipe implements PipeTransform {
  transform(cities: City[], query: string) {
    query = query.trim().toLocaleLowerCase();

    if (query) {
      return cities.filter((f) => f.name.toLocaleLowerCase().includes(query));
    } else {
      return cities;
    }
  }
}
