import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT"
  })
};
@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "https://cedesistemas-app-api.azurewebsites.net/api/Restaurantes";
  }
  getAll() {
    const requestUrl = this.baseUrl;
    return this.http.get(requestUrl, httpOptions);
  }
}
