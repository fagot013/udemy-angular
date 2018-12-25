import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('shoppingItem') shoppingItem: NgForm;

  @Output() clear = new EventEmitter<void>();
  @Output() delete = new EventEmitter<Ingredient>();

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredient = new Ingredient(this.shoppingItem.value.itemName, +this.shoppingItem.value.itemAmount);
    this.slService.addIngredient(newIngredient);
  }

  onDelete() {
    this.delete.emit(new Ingredient(this.shoppingItem.value.itemName, +this.shoppingItem.value.itemAmount));
  }

  onClear() {
    this.clear.emit();
  }

}
