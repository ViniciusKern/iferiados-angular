import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { TYPE_IDS } from '../holiday-type/holiday-type';
import { UserLocationService } from '../user-location/user-location.service';
import { Holiday } from './holiday';

const API_URL = environment.api + '/' + environment.holidaysEndpoint;

@Injectable({
  providedIn: 'root',
})
export class HolidayService {
  constructor(
    private http: HttpClient,
    private userLocationService: UserLocationService
  ) {}

  getHolidays(): Observable<Holiday[]> {
    const userLocation = this.userLocationService.getLocation();

    const params = userLocation.stateCode
      ? new HttpParams().append('state', userLocation.stateCode)
      : new HttpParams();

    return this.http
      .get<Holiday[]>(API_URL, {
        params,
      })
      .pipe(
        map((json: any) => {
          let holidays: Holiday[] = [];

          json.country.forEach((data: any) =>
            holidays.push(this.fetchHoliday(TYPE_IDS.COUNTRY, data))
          );

          if (json.state) {
            json.state.forEach((data: any) =>
              holidays.push(this.fetchHoliday(TYPE_IDS.STATE, data))
            );
          }

          if (json.cities && userLocation.city.id) {
            let cityHolidays = json.cities[userLocation.city.id];

            if (cityHolidays) {
              cityHolidays.forEach((data: any) =>
                holidays.push(this.fetchHoliday(TYPE_IDS.CITY, data))
              );
            }
          }

          holidays.sort(
            (a: Holiday, b: Holiday) => a.date.getTime() - b.date.getTime()
          );

          return holidays;
        })
      );
  }

  private fetchHoliday(typeId: number, data: any): Holiday {
    return new Holiday(
      data.name,
      typeId,
      data.type,
      data.date,
      data.mobileDates,
      data.info
    );
  }
}
