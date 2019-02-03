import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { Actions, ADD_RECIPE, DELETE_RECIPE, SET_RECIPES, UPDATE_RECIPE } from './recipe.actions';
import { AppState } from '../../store/app.reducers';

export interface FeatureState extends AppState {
  recipes: State;
}


export interface State {
  recipes: Recipe[];
}


const initialState = {
  recipes: [
    new Recipe('Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://www.maxpixel.net/static/photo/1x/Schnitzel-Eat-Schnitzel-With-Fries-Schnipo-Lunch-1837703.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://www.maxpixel.net/static/photo/640/Burger-Bbq-Bun-Barbeque-Hamburger-Beef-1238246.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 2)
      ])
  ]
};


export function recipeReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };
    case ADD_RECIPE: {
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    }
    case UPDATE_RECIPE:
      const recipe = state.recipes[action.payload.index];
      const updatedRecipes = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipe[action.payload.index] = updatedRecipes;
      return {
        ...state,
        recipes: recipes
      };
    case DELETE_RECIPE:
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default: return state;
  }
}
