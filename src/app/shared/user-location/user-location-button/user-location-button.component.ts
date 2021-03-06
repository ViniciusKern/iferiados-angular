import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

import { UserLocation } from '../user-location';
import { UserLocationService } from '../user-location.service';

@Component({
  selector: 'app-user-location-button',
  templateUrl: './user-location-button.component.html',
  styleUrls: ['./user-location-button.component.scss'],
})
export class UserLocationButtonComponent implements OnInit {
  userLocation$: Observable<UserLocation>;

  placeIcon = faMapMarkerAlt;

  constructor(private userLocationService: UserLocationService) {}

  ngOnInit(): void {
    this.userLocation$ = this.userLocationService.getObservableLocation();
  }
}
