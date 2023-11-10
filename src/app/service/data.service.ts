import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

interface DrinksObj {
  drinks: Drink[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=w';

  constructor(private http: HttpClient) {}

  getDrinks(): Observable<DrinksObj> {
    return this.http.get<DrinksObj>(this.apiUrl);
  }
}
