import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'heroes-villains-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {

  data:any[] = []

  constructor(private http: HttpClient) {
    http.get<any>("https://akabab.github.io/superhero-api/api/all.json")
      .subscribe(res => {
        this.data = res
      })
  }
  
}
