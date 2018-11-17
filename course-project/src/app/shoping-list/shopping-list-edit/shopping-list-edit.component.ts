import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;

  @Output() add = new EventEmitter<Ingredient>();
  @Output() clear = new EventEmitter<void>();
  @Output() delete = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    this.add.emit(new Ingredient(
      this.nameRef.nativeElement.value,
      +this.amountRef.nativeElement.value));
    }

  onDelete() {
    this.delete.emit(new Ingredient(
      this.nameRef.nativeElement.value,
      +this.amountRef.nativeElement.value));
  }

  onClear() {
    this.clear.emit();
  }

}
