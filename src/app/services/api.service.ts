import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  dbURL: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  private getNameFromDb(endpoint:string):Promise<any> {
    return this.http.get(this.dbURL + endpoint).toPromise();
  }

  /* Fetch first name */
  getFirstName():Promise<string>{
    return this.getNameFromDb('/firstName').then((data) => {
      return data;
    });
  }

  /* Fetch middle name */
  getMiddleName():Promise<string>{
    return this.getNameFromDb('/middleName').then((data) => {
      return data;
    });
  }

  /* Fetch last name */
  getLastName():Promise<string>{
    return this.getNameFromDb('/lastName').then((data) => {
      return data;
    });
  }
}