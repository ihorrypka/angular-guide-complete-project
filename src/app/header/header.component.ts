import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  selectRecipes: string = 'recipes';
  selectShoppingList: string = 'shopping-list';
  @Output() selectedRecipes = new EventEmitter<string>();
  @Output() selectedShoppingList = new EventEmitter<string>();

  onSelectRecipes() {
    this.selectedRecipes.emit(this.selectRecipes);
  }

  onSelectShoppingList() {
    this.selectedShoppingList.emit(this.selectShoppingList);
  }
}
