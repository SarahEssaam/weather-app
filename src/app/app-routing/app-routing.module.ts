import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from '../statistics/statistics.component'
import { GeneralDisplayComponent } from '../general-display/general-display.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
    {
        path: '',
        component: GeneralDisplayComponent,
    },
    {
      path: 'statistics',
      component: StatisticsComponent,
  }
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
