import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchComponent } from '@heroes-villains/shared/ui';


@Component({
  selector: 'heroes-villains-search-results-route',
  templateUrl: './search-results-route.component.html',
  styleUrls: ['./search-results-route.component.css'],
})

export class SearchResultsRouteComponent {
  hero:string = "bat"


  data:any[] = []

  constructor(private http: HttpClient) {
    http.get<any>(`https://www.superheroapi.com/api.php/5918334748219881/search/${this.hero}`)
      .subscribe(res => {
        this.data = res.results
      })
  }
  
}
