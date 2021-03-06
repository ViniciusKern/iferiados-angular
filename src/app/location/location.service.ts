import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { State } from './states/state';
import { environment } from 'src/environments/environment';
import { City } from './cities/city';

const STATES_API_URL = environment.api + '/' + environment.statesEndpoint;
const CITIES_API_URL = environment.api + '/' + environment.citiesEndpoint;

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getStates(): Observable<State[]> {
    return this.http.get<State[]>(STATES_API_URL).pipe(
      map((json: any) => {
        let states: State[] = [];

        json.states.forEach((state: any) =>
          states.push(new State(state.code, state.name))
        );

        return states;
      })
    );
  }

  getCities(stateCode: string): Observable<City[]> {
    const params = new HttpParams().append('state', stateCode);

    return this.http
      .get<City[]>(CITIES_API_URL, { params })
      .pipe(
        map((json: any) => {
          let cities: City[] = [];

          json.cities.forEach((city: any) =>
            cities.push(new City(city.id, city.name))
          );

          return cities;
        })
      );
  }
}
