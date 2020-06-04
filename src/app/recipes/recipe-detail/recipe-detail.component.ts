import {Component, OnInit} from '@angular/core';

import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  recipeList: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService,
              private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.recipeList = this.recipeService.getRecipes();
      this.recipe = this.recipeList[this.id];
    });
  }

  addToShoppingList(ingredients: Ingredient[]) {
    for (let i = 0; i < ingredients.length; i++) {
      this.shoppingListService.addIngredient(ingredients[i]);
    }
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
