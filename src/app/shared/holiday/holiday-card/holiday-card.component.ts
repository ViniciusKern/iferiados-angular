import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import { Holiday } from '../holiday';

@Component({
  selector: 'app-holiday-card',
  templateUrl: './holiday-card.component.html',
  styleUrls: ['./holiday-card.component.scss'],
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
export class HolidayCardComponent {
  @Input() holiday: Holiday;
  showInfo = false;

  openIcon = faAngleDown;
  closeIcon = faAngleUp;

  toggleInfo() {
    this.showInfo = !this.showInfo;
  }

  showInfoIcon() {
    return this.showInfo ? this.closeIcon : this.openIcon;
  }
}
