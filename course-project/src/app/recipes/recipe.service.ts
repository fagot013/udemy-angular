import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

// noinspection TsLint
  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test',
      'https://get.pxhere.com/photo/restaurant-dish-food-menu-recipe-fast-food-meat-bread-hamburger-sandwich-beer-cook-cheeseburger-gastronomy-slider-burgers-dining-room-appetizer-french-fries-cholesterol-junk-food-finger-food-patty-veggie-burger-breakfast-sandwich-american-food-buffalo-burger-1374894.jpg'),
    new Recipe('The second Recipe', 'This is more complex description',
      'https://get.pxhere.com/photo/restaurant-dish-food-menu-recipe-fast-food-meat-bread-hamburger-sandwich-beer-cook-cheeseburger-gastronomy-slider-burgers-dining-room-appetizer-french-fries-cholesterol-junk-food-finger-food-patty-veggie-burger-breakfast-sandwich-american-food-buffalo-burger-1374894.jpg')
  ];


  getRecipes() {
    return this.recipes.slice();
  }
}
