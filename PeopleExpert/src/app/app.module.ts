import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DashboardComponent,
    MaintenanceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
