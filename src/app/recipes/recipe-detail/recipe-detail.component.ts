import {Component, Input, OnInit} from '@angular/core';

import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  addToShoppingList(ingredients: Ingredient[]) {
    for (let i = 0; i < ingredients.length; i++){
      this.shoppingListService.addIngredient(ingredients[i]);
    }
  }
}
