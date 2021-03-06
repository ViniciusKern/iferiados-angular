import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { UserLocation } from './user-location';

const USER_LOCATION_KEY = 'UserLocation';

@Injectable({
  providedIn: 'root',
})
export class UserLocationService {
  private userLocationSubject: BehaviorSubject<UserLocation>;

  constructor() {
    this.userLocationSubject = new BehaviorSubject<UserLocation>(
      this.getLocation()
    );
  }

  setLocation(location: UserLocation) {
    window.localStorage.setItem(USER_LOCATION_KEY, JSON.stringify(location));

    this.userLocationSubject.next(location);
  }

  getLocation(): UserLocation {
    let value = window.localStorage.getItem(USER_LOCATION_KEY);

    if (value) {
      return JSON.parse(value) as UserLocation;
    }

    return new UserLocation();
  }

  getObservableLocation(): Observable<UserLocation> {
    return this.userLocationSubject.asObservable();
  }

  removeLocation() {
    window.localStorage.removeItem(USER_LOCATION_KEY);
  }
}
