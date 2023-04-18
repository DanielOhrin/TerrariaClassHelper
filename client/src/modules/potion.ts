export enum PotionCategory {
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

export interface Potion {
    id: number,
    name: string,
    imageUrl: string,
    category: PotionCategory
}
