import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './location/cities/cities.component';
import { StatesComponent } from './location/states/states.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'estados', component: StatesComponent },
  { path: ':state/cidades', component: CitiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
