import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {
  @Output() ingredientsDeleted = new EventEmitter<string>();
  @Output() ingredientsCleared = new EventEmitter();

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  addIngredients(name: string, amount: number) {
    this.shoppingListService.addIngredient(new Ingredient(name, amount));
  }

  deleteIngredients(name: string) {
    this.ingredientsDeleted.emit(name);
  }

  clearIngredients() {
    this.ingredientsCleared.emit();
  }
}
