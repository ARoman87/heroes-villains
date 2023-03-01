import { Component } from '@angular/core';

@Component({
  selector: 'heroes-villains-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})


export class SearchComponent {

  searchName: string = ""

  getInput(value: string) {
    this.searchName = value
  }


  
}
