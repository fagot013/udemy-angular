import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AddIngredient, DeleteIngredient, StopEdit, UpdateIngredient } from '../store/shopping-list.actions';
import { AppState } from '../store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingItem') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe(
      (data) => {
        if (data.editedIngredientIndex > -1) {
          this.editMode = true;
          this.editedItem = data.editedIngredient;
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        } else {
          this.editMode = false;
        }
      }
    );
  }

  onSubmit(form: NgForm) {
    const newIngredient = new Ingredient(form.value.name, +form.value.amount);
    if (this.editMode) {
      this.store.dispatch(new UpdateIngredient( {ingredient: newIngredient} ));
     } else {
      this.store.dispatch(new AddIngredient(newIngredient));
    }
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.store.dispatch(new DeleteIngredient());
    this.onClear();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.store.dispatch(new StopEdit());
    this.subscription.unsubscribe();
  }

}
