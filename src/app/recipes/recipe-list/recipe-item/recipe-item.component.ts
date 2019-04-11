import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe[];

  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
    
  }
  sendRecipe(recipe){
    this.recipeservice.recipeSelected.emit(recipe)
  }
}
