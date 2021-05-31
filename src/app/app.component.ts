import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedFeature: string = 'recipes';

  onChooseRecipes(loadedRecipesInfo: string) {
    this.loadedFeature = loadedRecipesInfo;
  }

  onChooseShoppingList(loadedShoppingListInfo: string) {
    this.loadedFeature = loadedShoppingListInfo;
  }
}
