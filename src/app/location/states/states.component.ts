import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LocationService } from '../location.service';
import { State } from './state';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss'],
})
export class StatesComponent implements OnInit {
  states$: Observable<State[]>;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.states$ = this.locationService.getStates();
  }
}
