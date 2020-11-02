import { Component, OnInit, ɵConsole } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gas-buddy',
  templateUrl: './gas-buddy.component.html',
  styleUrls: ['./gas-buddy.component.css']
})

@Injectable()
export class GasBuddyComponent implements OnInit {

  constructor(private httpClient: HttpClient) {}

  testing1234;
  keys;
  currentWeatherURL: string = '//api.openweathermap.org/data/2.5/weather?units=imperial&id=4243131&appid=659ca79cbbb840dc37c220ee9a2f9989';

  ngOnInit(): void {
    this.testing1234 = this.getPosts();
    // this.tabLen = this.testing1234.length;
  }

  getPosts() {
    this.httpClient.get<any>(this.currentWeatherURL).subscribe(data => {
      this.testing1234 = data;
      this.keys = Object.keys(this.testing1234)
      console.log(data);
      console.log(data["main"])
    })
  }

  getKeys(obj){
    return Object.keys(obj)
  }
}
