import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

import { Alert } from './alert';
import { InfoAlertService } from './info-alert.service';

@Component({
  selector: 'app-info-alert',
  templateUrl: './info-alert.component.html',
  styleUrls: ['./info-alert.component.scss'],
  animations: [
    trigger('infoAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.2s ease-in', style({ opacity: 0, height: 0 })),
      ]),
    ]),
  ],
})
export class InfoAlertComponent {
  @Input() timeout = 3000;
  alerts: Alert[] = [];

  constructor(private alertService: InfoAlertService) {
    this.alertService.getObservableAlert().subscribe((alert) => {
      if (alert) {
        this.alerts.push(alert);
        setTimeout(() => this.remove(alert), this.timeout);
      }
    });
  }

  remove(alertToRemove: Alert) {
    this.alerts = this.alerts.filter((alert) => alert != alertToRemove);
  }
}
