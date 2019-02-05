import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
// noinspection TsLint
import 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable()
export class DataStorageService {
  fireBaseUrl = 'https://ng-recipe-book-35bc7.firebaseio.com/recipes.json';

  constructor( private httpClient: HttpClient) {}

  saveRecipes()  {

  }

  getRecipes() {
  }
}
