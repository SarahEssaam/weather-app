import { RouterModule, Routes } from '@angular/router'; 
import { GeneralDisplayComponent } from '../general-display/general-display.component';
import { StatisticsComponent } from '../statistics/statistics.component';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch : 'full'},
  {path : '', component : GeneralDisplayComponent },
  {path : 'statistics', component : StatisticsComponent }
];
export const your_routing = RouterModule.forRoot(APP_ROUTES);
