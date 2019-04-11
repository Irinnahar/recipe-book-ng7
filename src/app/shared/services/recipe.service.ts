import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe[]>()
  constructor() { }

  recipes: Recipe[] = [
    new Recipe(
    'A Test 1', 
    'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('Meat', 2),
      new Ingredient('Tomato', 4)
    ]
   ),
    new Recipe(
      'A Test 2', 
      'This is simply a test', 
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Letus', 1)
      ])
  ];

  getRecipe(){
    return this.recipes.slice();
  }
}
