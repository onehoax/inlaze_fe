import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Drink } from '../drink';
import { CocktailcardComponent } from '../cocktailcard/cocktailcard.component';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-drinksbyletter',
  standalone: true,
  imports: [CommonModule, CocktailcardComponent],
  template: `
    <div class="text-center text-xl font-bold mb-4">
      <h1>All Cocktails For Letter: {{ letter }}</h1>
    </div>
    <div class="grid grid-cols-3 gap-5">
      @for(drink of drinks; track drink.idDrink) {
      <app-cocktailcard
        [imgSrc]="drink.strDrinkThumb"
        [imgAlt]="drink.strDrink"
        [name]="drink.strDrink"
        [id]="drink.idDrink"
      ></app-cocktailcard>
      }
    </div>
  `,
})
export class DrinksbyletterComponent {
  @Input()
  letter: string = '';
  drinks: Drink[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDrinksByFirstLetter(this.letter).subscribe({
      next: (drinkObj) => {
        this.drinks = drinkObj.drinks;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
