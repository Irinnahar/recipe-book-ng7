import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  getRecipe: any;

  constructor() { }

  ngOnInit() {
  
  }
  recipe(event){
    this.getRecipe = event;
    console.log(this.getRecipe)
  }
}
