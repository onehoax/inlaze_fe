import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailcardComponent } from '../cocktailcard/cocktailcard.component';
import { DataService } from '../service/data.service';
import { DrinksObj } from '../drink';
import { LetterlinkComponent } from '../letterlink/letterlink.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CocktailcardComponent, LetterlinkComponent],
  template: `
    <div class="flex flex-wrap justify-center h-12 my-5 pb-16 md:pb-5 border-b">
      <app-letterlink
        *ngFor="let letter of letters"
        [letter]="letter"
        [href]="letter"
      >
      </app-letterlink>
    </div>
    <div class="text-center text-xl font-bold mb-4">
      <h1>All Cocktails</h1>
    </div>
    <div class="grid grid-cols-3 gap-5">
      @for(drinksObj of allDrinks; track drinksObj.letter) { @for(drink of
      drinksObj.drinks; track drink.idDrink) {
      <app-cocktailcard
        [imgSrc]="drink.strDrinkThumb"
        [imgAlt]="drink.strDrink"
        [name]="drink.strDrink"
        [id]="drink.idDrink"
      ></app-cocktailcard>
      } }
    </div>
    <div class="flex flex-wrap justify-center h-12 my-6 pt-2 border-t">
      <app-letterlink
        *ngFor="let letter of letters"
        [letter]="letter"
        [href]="letter"
      >
      </app-letterlink>
    </div>
  `,
})
export class HomeComponent {
  letters: string[] = [];
  allDrinks: DrinksObj[] = [];
  constructor(private dataService: DataService) {
    for (let i = 97; i <= 122; i++) {
      this.letters.push(String.fromCharCode(i));
    }
  }

  ngOnInit() {
    for (let i = 97; i <= 122; i++) {
      let letter = String.fromCharCode(i);
      this.dataService.getDrinksByFirstLetter(letter).subscribe({
        next: (drinkObj) => {
          this.allDrinks.push({ letter: letter, drinks: drinkObj.drinks });
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
