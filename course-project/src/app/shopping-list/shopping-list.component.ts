import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.shoppingListService.addIngredient(ingredient);
    this.ingredients.push(ingredient);
  }

  onIngredientDelete(ingredient: Ingredient) {
    this.ingredients = this.ingredients.filter((i) => {
      return i.name !== ingredient.name;
    });
  }

  onIngredientClear() {
    this.ingredients.splice(0, this.ingredients.length);
  }
}
