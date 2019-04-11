import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;

  constructor(private shoppingService : ShoppingListService) { }

  ngOnInit() {
  }
  addRecipe(){
    let name = this.nameRef.nativeElement.value;
    let amount = this.amountRef.nativeElement.value;

    this.shoppingService.addIngredient({name: name, amount: amount})
  }
}
