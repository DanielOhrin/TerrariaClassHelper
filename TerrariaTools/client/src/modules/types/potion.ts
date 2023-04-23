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

export interface PotionData {
    id: number,
    name: string,
    imageUrl: string,
    potionCategoryId: PotionCategoryId,
    potionCategory: PotionCategory,
    potionIngredients?: []
}

export class Potion implements PotionData {
    id
    name
    imageUrl
    potionCategoryId
    potionCategory
    potionIngredients?

    constructor(props: PotionData) {
        this.id = props.id
        this.name = props.name
        this.imageUrl = props.imageUrl
        this.potionCategoryId = props.potionCategoryId
        this.potionCategory = props.potionCategory
        this.potionIngredients = props.potionIngredients
    }
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