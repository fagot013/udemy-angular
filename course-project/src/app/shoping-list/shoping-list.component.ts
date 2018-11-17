import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdd(ingredient: Ingredient) {
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
