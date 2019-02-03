import { Component, OnInit} from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FeatureState, State } from '../store/recipe.reducers';
import { Store } from '@ngrx/store';

@Component ({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipesState: Observable<State>;

  constructor(private recipeService: RecipeService,
              private store: Store<FeatureState>,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.recipesState = this.store.select('recipes');
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
