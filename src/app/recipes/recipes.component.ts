import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  getRecipe: any;

  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
    this.recipeservice.recipeSelected.subscribe(recipe => {
      this.getRecipe = recipe;
    })  
  }
}
