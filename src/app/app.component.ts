import { Component, OnInit } from '@angular/core';
import { WserviceService } from './wservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  city = '';
  title = 'weatherApp';
  weatherApp: any;
  sum: string = '';
  temp: number = 0;
  wind: number = 0;
  humidity: number = 0;
  imgURL = '';



  constructor(private weatherService: WserviceService) { }

  ngOnInit() { }

  getWeather() {
    this.weatherService.getUrl(this.city).subscribe((data: any) => {
      this.weatherApp = data;

      this.sum = this.weatherApp.weather[0].main;
      this.city = this.weatherApp.name;
      this.temp = Math.round(this.weatherApp.main.temp);
      this.humidity = this.weatherApp.main.humidity;
      this.wind = this.weatherApp.wind.speed;

      if (this.weatherApp.weather[0].main === "Clouds") {
        this.imgURL = "../assets/cloudy.svg";
      } else if (this.weatherApp.weather[0].main === "Clear") {
        this.imgURL = "../assets/clear-day.svg";
      } else if (this.weatherApp.weather[0].main === "Rain") {
        this.imgURL = "../assets/rain.svg";
      } else if (this.weatherApp.weather[0].main === "Drizzle") {
        this.imgURL = "../assets/drizzle.svg";
      } else if (this.weatherApp.weather[0].main === "Mist") {
        this.imgURL = "../assets/mist.svg";
      } else if (this.weatherApp.weather[0].main === "Fog") {
        this.imgURL = "../assets/fog.svg";
      } else if (this.weatherApp.weather[0].main === "Snow") {
        this.imgURL = "../assets/snow.svg";
      }
    });
  };


  search() {
    this.getWeather()
  }


}
