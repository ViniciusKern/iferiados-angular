import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { InfoAlertService } from 'src/app/shared/info-alert/info-alert.service';
import { UserLocationService } from 'src/app/shared/user-location/user-location.service';
import { LocationService } from '../location.service';
import { City } from './city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  cities$: Observable<City[]>;
  filter: string = '';
  stateCode: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private locationService: LocationService,
    private userLocationService: UserLocationService,
    private infoService: InfoAlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.stateCode = this.activatedRoute.snapshot.params.state;
    this.cities$ = this.locationService.getCities(this.stateCode);
  }

  setUserLocation(city: City) {
    this.userLocationService.setLocation({
      stateCode: this.stateCode,
      city: { id: city.id, name: city.name },
    });

    this.router.navigate(['']);

    this.infoService.show(
      `Exibindo os feriados locais de ${city.name}/${this.stateCode}`
    );
  }
}
