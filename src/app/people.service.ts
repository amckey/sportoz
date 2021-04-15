import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  statisticsData = "https://sheets.googleapis.com/v4/spreadsheets/1VaWq_8EaxQCDNd_wdDquYg1Zgj_XZ1j7zRnaBESC3xw/values/A2:G700?key=AIzaSyBWShOPtlsq02N--cm4ZIJudonMVTKv6uA"
  dateOfNextTesting = "https://sheets.googleapis.com/v4/spreadsheets/1VaWq_8EaxQCDNd_wdDquYg1Zgj_XZ1j7zRnaBESC3xw/values/J2:J3?key=AIzaSyBWShOPtlsq02N--cm4ZIJudonMVTKv6uA"

  getAll() {
    return this.http.get(this.statisticsData);
  }

  getDate() {
    return this.http.get(this.dateOfNextTesting);
  }
}

