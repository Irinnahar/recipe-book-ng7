import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipeItem: Recipe[];
  @Output() recipeSelect = new EventEmitter()
  recipes: Recipe[] = [
    new Recipe('A Test 1', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test 2', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelect(recipe){
    this.recipeSelect.emit(recipe)
    
  }
}
