import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
// noinspection TsLint
import 'rxjs/Rx';
// import { Observable } from 'rxjs';

@Injectable()
export class DataStorageService {
  fireBaseUrl = 'https://ng-recipe-book-35bc7.firebaseio.com/recipes.json';

  constructor( private http: Http, private recipeService: RecipeService) {}

  saveRecipes()  {
    return this.http.put(this.fireBaseUrl, this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get(this.fireBaseUrl)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log('here');
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        })
      .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
