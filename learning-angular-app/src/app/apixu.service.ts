import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  // The Digitalocean tutorial provided the url api.apixu.com, which forwards now to weatherstack -
  // Its documentation can help fix the discrepancies between the dated tutorial and current weatherstack response format
  getWeather(location: string): Observable<any> {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=' + environment.WEATHER_API_KEY + 'b&query=' + location
    );
  }
}
