import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Tuscan Chicken Skillet',
            'This is delicious',
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
            [
                new Ingredient('Noodles', 10),
                new Ingredient('Chicken', 1)
            ]),
        new Recipe(
            'Garlic Butter Sauteed Zucchini',
            'Awesome dish',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh1s99eq3PWSluaEeyJ2XQ3oatcfib_coF95CcRbTnZ6kIO9T_&s',
            [
                new Ingredient('Butter', 1),
                new Ingredient('Garlic', 5)
            ])
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
    
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}