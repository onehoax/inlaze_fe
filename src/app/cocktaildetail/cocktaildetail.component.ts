import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../service/data.service';
import { Drink } from '../drink';

@Component({
  selector: 'app-cocktaildetail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex h-full w-full justify-center">
      <div
        class="bg-gray-100 h-[28rem] sm:w-2/3 overflow-hidden rounded-md shadow-md hover:shadow-2xl transition ease-out duration-300"
      >
        <img
          [src]="drink.strDrinkThumb"
          [alt]="drink.strDrink"
          class="w-full h-80 object-cover"
        />
        <div class="m-4 text-stone-500 text-lg">
          <ul>
            <li><span class="font-bold">Name:</span> {{ drink.strDrink }}</li>
            <li>
              <span class="font-bold">Category:</span> {{ drink.strCategory }}
            </li>
            <li>
              <span class="font-bold">Type:</span> {{ drink.strAlcoholic }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
})
export class CocktaildetailComponent {
  @Input()
  id = '';
  drink: Drink = {
    idDrink: '',
    strDrink: '',
    strDrinkThumb: '',
    strCategory: '',
    strAlcoholic: '',
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDrinkById(this.id).subscribe({
      next: (drinkObj) => {
        this.drink = drinkObj.drinks[0];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
