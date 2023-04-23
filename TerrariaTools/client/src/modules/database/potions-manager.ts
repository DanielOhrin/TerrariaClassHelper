import { PotionData } from "../types/potion";

const _baseUrl: string = "/api"

export function getPotions(): Promise<PotionData[]> {
    return fetch(`${_baseUrl}/potions`)
        .then(res => res.json())
}
