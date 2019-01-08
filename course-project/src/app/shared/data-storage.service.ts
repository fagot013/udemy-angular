import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
// noinspection TsLint
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';
// import { Observable } from 'rxjs';

@Injectable()
export class DataStorageService {
  fireBaseUrl = 'https://ng-recipe-book-35bc7.firebaseio.com/recipes.json';

  constructor( private http: Http, private recipeService: RecipeService,
               private authService: AuthService) {}

  saveRecipes()  {
    const token = this.authService.getToken();
    return this.http.put(this.fireBaseUrl + '?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get(this.fireBaseUrl + '?auth=' + token)
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
