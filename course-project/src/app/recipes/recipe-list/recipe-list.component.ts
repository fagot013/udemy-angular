import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component ({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {

  // noinspection TsLint
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test',
      'https://get.pxhere.com/photo/restaurant-dish-food-menu-recipe-fast-food-meat-bread-hamburger-sandwich-beer-cook-cheeseburger-gastronomy-slider-burgers-dining-room-appetizer-french-fries-cholesterol-junk-food-finger-food-patty-veggie-burger-breakfast-sandwich-american-food-buffalo-burger-1374894.jpg'),
    new Recipe('The second Recipe', 'This is more complex description',
      'https://get.pxhere.com/photo/restaurant-dish-food-menu-recipe-fast-food-meat-bread-hamburger-sandwich-beer-cook-cheeseburger-gastronomy-slider-burgers-dining-room-appetizer-french-fries-cholesterol-junk-food-finger-food-patty-veggie-burger-breakfast-sandwich-american-food-buffalo-burger-1374894.jpg')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {

  }

  onItemSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
