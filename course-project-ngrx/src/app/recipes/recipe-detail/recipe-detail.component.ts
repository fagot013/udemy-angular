import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import { Observable } from 'rxjs';
import { FeatureState, State } from '../store/recipe.reducers';
import { DeleteRecipe } from '../store/recipe.actions';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipesState: Observable<State>;
  id: number;
  constructor(private store: Store<FeatureState>,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
    this.recipesState = this.store.select('recipes');
  }

  toShoppingList() {
    this.store.select('recipes')
      .take(1)
      .subscribe( (state: State) => {
        this.store.dispatch(new ShoppingListActions.AddIngredients(state.recipes[this.id].ingredients));
      });

  }

  onEditRecipe() {
    // this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.store.dispatch(new DeleteRecipe(this.id));
    this.router.navigate(['/recipes'], {relativeTo: this.route});
  }
}
