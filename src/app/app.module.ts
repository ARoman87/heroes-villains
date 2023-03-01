import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { FeaturedComponent } from './featured/featured.component';
import { SharedUiModule } from '@heroes-villains/shared/ui';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AppComponent, FeaturedComponent, MainComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    SharedUiModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
