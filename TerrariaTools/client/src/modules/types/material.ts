import { PotionIngredient } from "./potion"

export interface Material {
    id: number,
    name: string,
    imageUrl: string,
    isHardmode: boolean,
    potionIngredients?: PotionIngredient[]
}