import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UserLocationButtonComponent } from './user-location-button/user-location-button.component';

@NgModule({
  declarations: [UserLocationButtonComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [UserLocationButtonComponent],
})
export class UserLocationModule {}
