import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoadingIndicatorComponent } from './loading-indicator.component';

@NgModule({
  declarations: [LoadingIndicatorComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [LoadingIndicatorComponent],
})
export class LoadingIndicatorModule {}
