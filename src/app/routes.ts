import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CocktaildetailComponent } from './cocktaildetail/cocktaildetail.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'details',
    component: CocktaildetailComponent,
    title: 'Cocktail Details',
  },
];
export default routeConfig;
