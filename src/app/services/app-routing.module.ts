import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from '../statistics/statistics.component'
import { GeneralDisplayComponent } from '../general-display/general-display.component';
import { AppComponent } from '../app.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
    {
        path: 'home',
        component: GeneralDisplayComponent,
    },
    {
      path: 'statistics',
      component: StatisticsComponent,
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [
        // CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
