import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getStations(): Observable<any> {
    return this.http.get('../mock/stations.json');
  }

  public getSatellites(): Observable<any> {
    return this.http.get('../mock/satellites.json');
  }

  public getPowerSupplies(): Observable<any> {
    return this.http.get('../mock/powerSupplies.json');
  }

  public getCars(): Observable<any> {
    return this.http.get('../mock/cars.json');
  }

  public getLog(): Observable<any> {
    return this.http.get('../mock/log.json');
  }
}
