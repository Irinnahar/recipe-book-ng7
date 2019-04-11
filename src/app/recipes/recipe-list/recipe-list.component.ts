import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../shared/models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipeItem: Recipe[];

  recipes: Recipe[];


  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
    this.recipes  = this.recipeservice.getRecipe();
  }
 
}
