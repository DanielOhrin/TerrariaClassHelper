import { CraftingStation } from "./crafting-station"
import { Material } from "./material"

export enum PotionCategoryId {
    Buff = 1,
    Utility,
    Luck,
    Fishing,
    SpawnRates,
    Mining,
    Flask,
    Healing,
    Mana,
    Misc
}

export type Potion = {
    id: number,
    name: string,
    imageUrl: string,
    potionCategoryId: PotionCategoryId,
    potionCategory: PotionCategory,
    potionIngredients?: []
}

export interface PotionCategory {
    id: PotionCategoryId,
    label: string,
    potions?: Potion[]
}

export interface PotionRecipe {
    id: number,
    amount: number,
    potionId?: number,
    craftingStationId: number,
    craftingStation: CraftingStation,
    potionIngredients: PotionIngredient[]
}

export interface PotionIngredient {
    id: number,
    amount: number,
    ingredientId?: number,
    potionId?: number,
    ingredient?: Material,
    potion?: Potion
}