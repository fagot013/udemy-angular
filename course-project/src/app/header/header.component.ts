import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() menuSelected: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  recipesSelected() {
    this.menuSelected.emit('recipes');
  }

  shoppingListSelected() {
    this.menuSelected.emit('shoppingList');
  }

}
