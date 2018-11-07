import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component ({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://get.pxhere.com/photo/restaurant-dish-food-menu-recipe-fast-food-meat-bread-hamburger-sandwich-beer-cook-cheeseburger-gastronomy-slider-burgers-dining-room-appetizer-french-fries-cholesterol-junk-food-finger-food-patty-veggie-burger-breakfast-sandwich-american-food-buffalo-burger-1374894.jpg')
  ];

  constructor() {

  }
}
