import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { FETCH_RECIPE, FetchRecipe, SAVE_RECIPE, SET_RECIPES } from './recipe.actions';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Recipe } from '../recipe.model';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { FeatureState} from './recipe.reducers';
import { Store } from '@ngrx/store';

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

  @Effect({dispatch: false})
  recipeStore =  this.actions$
    .pipe(
      ofType(SAVE_RECIPE),
      withLatestFrom(this.store.select('recipes')),
      switchMap(([action, state]) => {
        const req = new HttpRequest('PUT', this.fireBaseUrl, state.recipes, {
          reportProgress: true
        });
        return this.httpClient.request(req);
      })
    );

   constructor(private actions$: Actions,
               private store: Store<FeatureState>,
               private httpClient: HttpClient) {}

}
