import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getPosts();
  }

  testing1234;
  keys;
  currentWeatherURL: string = '//api.openweathermap.org/data/2.5/weather?units=imperial&id=4243131&appid=659ca79cbbb840dc37c220ee9a2f9989';


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
