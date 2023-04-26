import { PotionRecipe } from "./potion";

export interface CraftingStation {
    id: number,
    name: string,
    imageUrl: string,
    potionRecipes?: PotionRecipe[]
}