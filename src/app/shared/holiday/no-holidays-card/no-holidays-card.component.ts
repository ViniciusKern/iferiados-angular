import { Component, Input, OnInit } from '@angular/core';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import { UserLocation } from '../../user-location/user-location';
import { UserLocationService } from '../../user-location/user-location.service';

@Component({
  selector: 'app-no-holidays-card',
  templateUrl: './no-holidays-card.component.html',
  styleUrls: ['./no-holidays-card.component.scss'],
})
export class NoHolidaysCardComponent implements OnInit {
  @Input() holidayTypeName: string;

  exclamationIcon = faExclamationCircle;
  userLocation: UserLocation;

  constructor(private userLocationService: UserLocationService) {}

  ngOnInit(): void {
    this.userLocation = this.userLocationService.getLocation();
  }
}
