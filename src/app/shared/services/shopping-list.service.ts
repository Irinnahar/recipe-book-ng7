import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  selectEvent = new EventEmitter();
  constructor() { }
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.selectEvent.emit(this.ingredients.slice());
  }
  passRecipeToShoppingList(ingredient: Ingredient[]){
    this.ingredients.push(...ingredient);
    this.selectEvent.emit(this.ingredients.slice());
  }
}
