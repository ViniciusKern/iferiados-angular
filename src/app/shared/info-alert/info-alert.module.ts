import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoAlertComponent } from './info-alert.component';

@NgModule({
  declarations: [InfoAlertComponent],
  exports: [InfoAlertComponent],
  imports: [CommonModule],
})
export class InfoAlertModule {}
