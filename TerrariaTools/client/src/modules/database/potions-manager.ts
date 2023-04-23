import { Potion } from "../types/potion";

const _baseUrl: string = "/api"

export function getPotions(): Promise<Potion[]> {
    return fetch(`${_baseUrl}/potions`)
        .then(res => res.json())
}
