import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Alert } from './alert';

@Injectable({ providedIn: 'root' })
export class InfoAlertService {
  alertSubject: Subject<Alert> = new Subject<Alert>();

  show(message: string) {
    this.alertSubject.next(new Alert(message));
  }

  getObservableAlert(): Observable<Alert> {
    return this.alertSubject.asObservable();
  }
}
