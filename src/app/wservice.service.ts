import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WserviceService {

  city: string = '';
  private apiKey = '361c741c4fbd9521202a31ebc59895ff';


  constructor(private http: HttpClient) { }

  getUrl(city: string) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
    return this.http.get(apiUrl);

  }
}
