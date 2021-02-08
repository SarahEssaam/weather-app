import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { GeneralDisplayComponent } from './general-display/general-display.component';
import { MainAreaComponent } from './general-display/main-area/main-area.component';
import { TabsAreaComponent } from './general-display/main-area/tabs-area/tabs-area.component';
import { NowAreaComponent } from './general-display/main-area/tabs-area/now-area/now-area.component';
import { HourlyAreaComponent } from './general-display/main-area/tabs-area/hourly-area/hourly-area.component';
import { WeeklyAreaComponent } from './general-display/main-area/tabs-area/weekly-area/weekly-area.component';
// import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './main-panel/search/search.component';
import { AppRoutingModule } from './services/app-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { D3ChartComponent } from './statistics/d3-chart/d3-chart.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { MainPanelComponent } from './main-panel/main-panel.component'
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    GeneralDisplayComponent,
    MainAreaComponent,
    TabsAreaComponent,
    NowAreaComponent,
    HourlyAreaComponent,
    WeeklyAreaComponent,
    SearchComponent,
    StatisticsComponent,
    D3ChartComponent,
    NavigationComponent,
    AboutComponent,
    MainPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // BrowserAnimationsModule,
    // MatTabsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
