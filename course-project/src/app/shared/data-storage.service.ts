import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
// noinspection TsLint
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable()
export class DataStorageService {
  fireBaseUrl = 'https://ng-recipe-book-35bc7.firebaseio.com/recipes.json';

  constructor( private httpClient: HttpClient, private recipeService: RecipeService,
               private authService: AuthService) {}

  saveRecipes()  {
    const token = this.authService.getToken();
    return this.httpClient.put(this.fireBaseUrl + '?auth=' + token, this.recipeService.getRecipes(), {
      observe: 'body'
    });
  }

  getRecipes() {
    const token = this.authService.getToken();
    // return this.httpClient.get<Recipe[]>(this.fireBaseUrl + '?auth=' + token)
    return this.httpClient.get<Recipe[]>(this.fireBaseUrl + '?auth=' + token, {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
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
