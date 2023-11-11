import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CocktaildetailComponent } from './cocktaildetail/cocktaildetail.component';
import { DrinksbyletterComponent } from './drinksbyletter/drinksbyletter.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: ':letter',
    component: DrinksbyletterComponent,
    title: 'Drinks By Letter',
  },
  {
    path: 'drink/:id',
    component: CocktaildetailComponent,
    title: 'Cocktail Details',
  },
];
