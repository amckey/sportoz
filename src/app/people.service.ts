import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  url = "https://sheets.googleapis.com/v4/spreadsheets/1VaWq_8EaxQCDNd_wdDquYg1Zgj_XZ1j7zRnaBESC3xw/values/A2:G700?key=AIzaSyBWShOPtlsq02N--cm4ZIJudonMVTKv6uA"

  getAll() {
    return this.http.get(this.url);

  }
}

