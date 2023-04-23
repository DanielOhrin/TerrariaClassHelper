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
    potionIngredients?: [],
    potionRecipes: PotionRecipe[]
}


/*
*   Amount = the amount of times to craft the potion
*/
export class Potion {
    private readonly id
    readonly name
    readonly imageUrl
    readonly categoryId
    readonly category
    private readonly recipes
    private amount = 0

    constructor(props: PotionData) {
        this.id = props.id
        this.name = props.name
        this.imageUrl = props.imageUrl
        this.categoryId = props.potionCategoryId
        this.category = props.potionCategory
        this.recipes = props.potionRecipes
    }

    /**
     * 
     * @returns All associated PotionRecipes with the updated ingredient amounts
     */
    getRecipes(): PotionRecipe[] {
        return this.recipes.map(recipe => {
            return {
                id: recipe.id,
                amount: this.amount * recipe.amount,
                potionId: this.id,
                craftingStationId: recipe.craftingStationId,
                craftingStation: recipe.craftingStation,
                potionIngredients: recipe.potionIngredients.map(ingredient => {
                    const ingredientObj = { ...ingredient }
                    ingredientObj.amount *= this.amount

                    return ingredientObj
                })
            }
        })
    }

    /**
     * 
     * @param amount Amount of times to craft the potion
     */
    setAmount(amount: number): void {
        this.amount = amount
    }

    /**
     * 
     * @returns The current amount of times to craft the potion
     */
    getAmount(): number {
        return this.amount
    }

    /**
     * 
     * @returns The current total amount of potions that will be crafted
     */
    getAmountCrafted(): number {
        return this.amount * this.recipes[0].amount
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