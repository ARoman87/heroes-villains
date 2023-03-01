import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavComponent, SearchComponent],
  exports: [NavComponent, SearchComponent],
})
export class SharedUiModule {}
