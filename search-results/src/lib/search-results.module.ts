import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchResultsRouteComponent } from './search-results-route/search-results-route.component';
import { SharedUiModule } from '@heroes-villains/shared/ui';

@NgModule({
  declarations: [SearchResultsRouteComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: SearchResultsRouteComponent
      },
    ]),
  ],
  
})
export class SearchResultsModule {}
