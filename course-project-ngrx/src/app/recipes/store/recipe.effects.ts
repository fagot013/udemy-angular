import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { FETCH_RECIPE, FetchRecipe, SET_RECIPES } from './recipe.actions';
import { map, switchMap } from 'rxjs/operators';
import { Recipe } from '../recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecipeEffects {
  fireBaseUrl = 'https://ng-recipe-book-35bc7.firebaseio.com/recipes.json';

  @Effect()
  recipesFetch = this.actions$
    .pipe(
      ofType(FETCH_RECIPE),
      switchMap( (action: FetchRecipe) => {
        return this.httpClient.get<Recipe[]>(this.fireBaseUrl, {
          observe: 'body',
          responseType: 'json'
        });
      }),
      map(
      (recipes) => {
        // console.log(recipes);
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return {
          type: SET_RECIPES,
          payload: recipes
        };
      })
    );


   constructor(private actions$: Actions,
               private httpClient: HttpClient) {}

}
