interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  strAlcoholic: string;
}

interface DrinksObj {
  letter: string;
  drinks: Drink[];
}

export { Drink, DrinksObj };
