import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailcardComponent } from '../cocktailcard/cocktailcard.component';
import { DataService } from '../service/data.service';

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CocktailcardComponent],
  template: `
    <div class="grid grid-cols-3 gap-4">
      @for(drink of drinks; track drink.idDrink) {
      <app-cocktailcard [name]="drink.strDrink"></app-cocktailcard>
      }
    </div>
  `,
})
export class HomeComponent {
  drinks: Drink[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDrinks().subscribe({
      next: (drinks) => {
        this.drinks = drinks.drinks;
        console.log(this.drinks);
        console.log(this.drinks[0]);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
