import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

// noinspection TsLint
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://www.maxpixel.net/static/photo/1x/Schnitzel-Eat-Schnitzel-With-Fries-Schnipo-Lunch-1837703.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://www.maxpixel.net/static/photo/640/Burger-Bbq-Bun-Barbeque-Hamburger-Beef-1238246.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 2)
      ])
  ];


  getRecipes() {
    return this.recipes.slice();
  }
}
