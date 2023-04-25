import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // url = "http://localhost:8000/api/ships";
  url = "http://localhost:8000/ships";
  constructor(private http: HttpClient) { }

  getShips() {    
    return this.http.get(this.url);
  }
  addShip(ship: any) {
    let httpHeader = new HttpHeaders();
    httpHeader.append('Content-Type', 'application/json');
    let httpOptions = {
      headers: httpHeader
    };
    return this.http.post(this.url, ship, httpOptions);
  }
  deleteShip(id: number) {
    let fullurl = this.url + '/' + id;
    return this.http.delete(fullurl);
  }
  updateShip(ship: any) {
    let fullurl = this.url + '/' + ship.id;
    let httpHeader = new HttpHeaders();
    httpHeader.append('Content-Type', 'application/json');
    let httpOptions = {
      headers: httpHeader
    };
    return this.http.put(fullurl, ship, httpOptions);
  }
}
