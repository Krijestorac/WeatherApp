import { Component } from '@angular/core';
import {WeatherData} from "../../models/weather.model";
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  watherData?: WeatherData;
  cityName: string = 'San Francisco';
  stateName: string = 'CA'

  constructor(private weatherService: WeatherService) {
  }

  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName, this.stateName);
    this.cityName = '';
    this.stateName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName, this.stateName);
    this.cityName = '';
    this.stateName = '';
  }

  private getWeatherData(cityName: string, stateName: string) {
    this.weatherService.getWeatherData(cityName, stateName)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          console.log(response);
        }
      });
  }
}
