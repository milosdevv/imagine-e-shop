import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private apiUrl = 'https://www.mapquestapi.com/staticmap/v5/map';
  private apiKey =
    ' https://www.mapquestapi.com/staticmap/v5/map?key=KEY&center=Boston,MA&size=600,400@2x'; // Replace with your actual API key

  constructor(private http: HttpClient) {}

  getMap(): Observable<any> {
    const params = {
      key: this.apiKey,
      size: '600,400',
      center: '37.7749,-122.4194',
      zoom: '10',
      type: 'map',
    };
    return this.http.get(this.apiUrl, { params });
  }
}
