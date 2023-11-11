import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { DrinksObj } from '../drink';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiBaseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(private http: HttpClient) {}

  getDrinksByFirstLetter(letter: string): Observable<DrinksObj> {
    const apiUrl = this.apiBaseUrl + 'search.php?f=' + letter;

    return this.http.get<DrinksObj>(apiUrl);
  }

  getDrinkById(id: string): Observable<DrinksObj> {
    const apiUrl = this.apiBaseUrl + 'lookup.php?i=' + id;

    return this.http.get<DrinksObj>(apiUrl);
  }
}
