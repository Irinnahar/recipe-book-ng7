import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  @Input() recipe: Recipe[]
  recipeList: any;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }
  recipies(event){
    console.log(this.recipe)
    this.recipeList = event
  }
  onShopping(ingredient: Ingredient []){
    this.shoppingService.passRecipeToShoppingList(ingredient)
  }
}
