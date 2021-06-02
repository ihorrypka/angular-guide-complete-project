import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef!: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onAddIngredient() {
    const ingredientName: string = this.nameInputRef.nativeElement.value;
    const ingredientAmount: number = this.amountInputRef.nativeElement.value;
    const newIngredient: Ingredient = new Ingredient(
      ingredientName,
      ingredientAmount
    );
    this.ingredientAdded.emit(newIngredient);
  }
}
