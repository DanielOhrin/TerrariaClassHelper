export enum PotionCategory {
    Buff = 1,
    Utility,
    Luck,
    Fishing,
    SpawnRates,
    Mining,
    Flask,
    Misc,
    Healing,
    Mana
}

export interface Potion {
    id: number,
    name: string,
    imageUrl: string,
    category: PotionCategory
}


export const potions: Potion[] = [
    {
        id: 1,
        name: "Ammo Reservation Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/9/96/Ammo_Reservation_Potion.png/revision/latest?cb=20200516184741",
        category: PotionCategory.Buff
    },
    {
        id: 2,
        name: "Archery Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/9/9f/Archery_Potion.png/revision/latest?cb=20200516185928",
        category: PotionCategory.Buff
    },
    {
        id: 3,
        name: "Battle Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/7/7c/Battle_Potion.png/revision/latest?cb=20200516190924",
        category: PotionCategory.SpawnRates
    },
    {
        id: 4,
        name: "Builder Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/1/1c/Builder_Potion.png/revision/latest?cb=20200516201946",
        category: PotionCategory.Utility
    },
    {
        id: 5,
        name: "Calming Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/d/d8/Calming_Potion.png/revision/latest?cb=20200516203936",
        category: PotionCategory.SpawnRates
    },
    {
        id: 6,
        name: "Crate Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/f/f9/Crate_Potion.png/revision/latest?cb=20200516210311",
        category: PotionCategory.Fishing
    },
    {
        id: 7,
        name: "Dangersense Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/f/f3/Dangersense_Potion.png/revision/latest?cb=20200516211042",
        category: PotionCategory.Utility
    },
    {
        id: 8,
        name: "Endurance Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/9/93/Endurance_Potion.png/revision/latest?cb=20200516211928",
        category: PotionCategory.Buff
    },
    {
        id: 9,
        name: "Featherfall Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/7/7b/Featherfall_Potion.png/revision/latest?cb=20200516212210",
        category: PotionCategory.Utility
    },
    {
        id: 10,
        name: "Fishing Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/f/fa/Fishing_Potion.png/revision/latest?cb=20200516212339",
        category: PotionCategory.Fishing
    },
    {
        id: 11,
        name: "Flipper Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/6/64/Flipper_Potion.png/revision/latest?cb=20200516212552",
        category: PotionCategory.Buff
    },
    {
        id: 12,
        name: "Gills Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/3/3d/Gills_Potion.png/revision/latest?cb=20200516212900",
        category: PotionCategory.Utility
    },
    {
        id: 13,
        name: "Gravitation Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/0/09/Gravitation_Potion.png/revision/latest?cb=20200516213538",
        category: PotionCategory.Utility
    },
    {
        id: 14,
        name: "Greater Luck Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/3/3b/Greater_Luck_Potion.png/revision/latest?cb=20200516213550",
        category: PotionCategory.Luck
    },
    {
        id: 15,
        name: "Heartreach Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/3/3c/Heartreach_Potion.png/revision/latest?cb=20200516213917",
        category: PotionCategory.Buff
    },
    {
        id: 16,
        name: "Hunter Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/7/72/Hunter_Potion.png/revision/latest?cb=20200516214136",
        category: PotionCategory.Utility
    },
    {
        id: 17,
        name: "Inferno Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/e/e5/Inferno_Potion.png/revision/latest?cb=20200516214243",
        category: PotionCategory.Buff
    },
    {
        id: 18,
        name: "Invisibility Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/c/c1/Invisibility_Potion.png/revision/latest?cb=20200516214253",
        category: PotionCategory.SpawnRates
    },
    {
        id: 19,
        name: "Ironskin Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/9/9f/Ironskin_Potion.png/revision/latest?cb=20200516214320",
        category: PotionCategory.Buff
    },
    {
        id: 20,
        name: "Lesser Luck Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/7/7b/Lesser_Luck_Potion.png/revision/latest?cb=20200516214713",
        category: PotionCategory.Luck
    },
    {
        id: 21,
        name: "Lifeforce Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/2/25/Lifeforce_Potion.png/revision/latest?cb=20200516214727",
        category: PotionCategory.Buff
    },
    {
        id: 22,
        name: "Love Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/3/3b/Love_Potion.png/revision/latest?cb=20200516214938",
        category: PotionCategory.Misc
    },
    {
        id: 23,
        name: "Luck Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/4/44/Luck_Potion.png/revision/latest?cb=20200516214938",
        category: PotionCategory.Luck
    },
    {
        id: 24,
        name: "Magic Power Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/2/2c/Magic_Power_Potion.png/revision/latest?cb=20200516215016",
        category: PotionCategory.Buff
    },
    {
        id: 25,
        name: "Mana Regeneration Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/c/cc/Mana_Regeneration_Potion.png/revision/latest?cb=20200516215051",
        category: PotionCategory.Buff
    },
    {
        id: 26,
        name: "Mining Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/d/d5/Mining_Potion.png/revision/latest?cb=20200516215343",
        category: PotionCategory.Mining
    },
    {
        id: 27,
        name: "Night Owl Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/2/20/Night_Owl_Potion.png/revision/latest?cb=20200516215826",
        category: PotionCategory.Utility
    },
    {
        id: 28,
        name: "Obsidian Skin Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/c/c8/Obsidian_Skin_Potion.png/revision/latest?cb=20200516215924",
        category: PotionCategory.Utility
    },
    {
        id: 29,
        name: "Rage Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/e/ec/Rage_Potion.png/revision/latest?cb=20200516220942",
        category: PotionCategory.Buff
    },
    {
        id: 30,
        name: "Regeneration Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/2/2d/Regeneration_Potion.png/revision/latest?cb=20200516221150",
        category: PotionCategory.Buff
    },
    {
        id: 31,
        name: "Shine Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/8/83/Shine_Potion.png/revision/latest?cb=20200516221718",
        category: PotionCategory.Utility
    },
    {
        id: 32,
        name: "Sonar Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/c/c8/Sonar_Potion.png/revision/latest?cb=20200516222148",
        category: PotionCategory.Fishing
    },
    {
        id: 33,
        name: "Spelunker Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/0/03/Spelunker_Potion.png/revision/latest?cb=20200516222253",
        category: PotionCategory.Mining
    },
    {
        id: 34,
        name: "Stink Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/2/21/Stink_Potion.png/revision/latest?cb=20200516222609",
        category: PotionCategory.Misc
    },
    {
        id: 35,
        name: "Summoning Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/9/91/Summoning_Potion.png/revision/latest?cb=20200516222643",
        category: PotionCategory.Buff
    },
    {
        id: 36,
        name: "Swiftness Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/3/3f/Swiftness_Potion.png/revision/latest?cb=20200516222714",
        category: PotionCategory.Buff
    },
    {
        id: 37,
        name: "Thorns Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/1/1c/Thorns_Potion.png/revision/latest?cb=20200516222906",
        category: PotionCategory.Buff
    },
    {
        id: 38,
        name: "Titan Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/5/59/Titan_Potion.png/revision/latest?cb=20200516222948",
        category: PotionCategory.Buff
    },
    {
        id: 38,
        name: "Warmth Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/3/31/Warmth_Potion.png/revision/latest?cb=20200516223442",
        category: PotionCategory.Misc
    },
    {
        id: 39,
        name: "Water Walking Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/2/21/Water_Walking_Potion.png/revision/latest?cb=20200516223457",
        category: PotionCategory.Utility
    },
    {
        id: 40,
        name: "Wrath Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/d/d7/Wrath_Potion.png/revision/latest?cb=20200516223718",
        category: PotionCategory.Buff
    },
    {
        id: 41,
        name: "Wormhole Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/3/3b/Wormhole_Potion.png/revision/latest?cb=20200516223710",
        category: PotionCategory.Utility
    },
    {
        id: 42,
        name: "Flask of Cursed Flames",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/0/08/Flask_of_Cursed_Flames.png/revision/latest?cb=20200516212455",
        category: PotionCategory.Flask
    },
    {
        id: 43,
        name: "Flask of Fire",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/7/77/Flask_of_Fire.png/revision/latest?cb=20200516212457",
        category: PotionCategory.Flask
    },
    {
        id: 44,
        name: "Flask of Gold",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/9/92/Flask_of_Gold.png/revision/latest?cb=20200516212459",
        category: PotionCategory.Flask
    },
    {
        id: 45,
        name: "Flask of Ichor",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/7/71/Flask_of_Ichor.png/revision/latest?cb=20200516212500",
        category: PotionCategory.Flask
    },
    {
        id: 46,
        name: "Flask of Nanites",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/6/64/Flask_of_Nanites.png/revision/latest?cb=20200516212503",
        category: PotionCategory.Flask
    },
    {
        id: 47,
        name: "Flask of Party",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/9/9f/Flask_of_Party.png/revision/latest?cb=20200516212504",
        category: PotionCategory.Flask
    },
    {
        id: 48,
        name: "Flask of Poison",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/c/cd/Flask_of_Poison.png/revision/latest?cb=20200516212506",
        category: PotionCategory.Flask
    },
    {
        id: 49,
        name: "Flask of Venom",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/f/f0/Flask_of_Venom.png/revision/latest?cb=20200516212507",
        category: PotionCategory.Flask
    },
    {
        id: 50,
        name: "Lesser Healing Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/e/e1/Lesser_Healing_Potion.png/revision/latest?cb=20200516214712",
        category: PotionCategory.Healing
    },
    {
        id: 51,
        name: "Healing Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/4/47/Healing_Potion.png/revision/latest?cb=20200516213909",
        category: PotionCategory.Healing
    },
    {
        id: 52,
        name: "Greater Healing Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/a/a5/Greater_Healing_Potion.png/revision/latest?cb=20200516213549",
        category: PotionCategory.Healing
    },
    {
        id: 53,
        name: "Super Healing Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/0/00/Super_Healing_Potion.png/revision/latest?cb=20200516222700",
        category: PotionCategory.Healing
    },
    {
        id: 54,
        name: "Mana Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/8/80/Mana_Potion.png/revision/latest?cb=20200516215049",
        category: PotionCategory.Mana
    },
    {
        id: 55,
        name: "Super Mana Potion",
        imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/4/43/Super_Mana_Potion.png/revision/latest?cb=20200516222702",
        category: PotionCategory.Mana
    }
]
