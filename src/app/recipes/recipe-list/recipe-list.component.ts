import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://food-images.files.bbci.co.uk/food/recipes/shakshouka_74716_16x9.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://food-images.files.bbci.co.uk/food/recipes/shakshouka_74716_16x9.jpg')
  ];

  constructor() {

  }

  ngOnInit(): void {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
