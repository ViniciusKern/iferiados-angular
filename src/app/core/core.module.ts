import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserLocationModule } from '../shared/user-location/user-location.module';
import { InfoAlertModule } from '../shared/info-alert/info-alert.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    InfoAlertModule,
    UserLocationModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
