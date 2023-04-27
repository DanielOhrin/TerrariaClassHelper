import { CombinedIngredient, calculatePotionIngredients } from "../modules/functions/calculatePotionIngredients";
import { Potion, PotionData } from "../modules/types/potion";

const json = JSON.parse(`[{
    "id": 19,
    "name": "Ironskin Potion",
    "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/9/9f/Ironskin_Potion.png",
    "potionCategoryId": 1,
    "potionCategory": {
        "id": 1,
        "label": "Buff",
        "potions": []
    },
    "potionIngredients": [],
    "potionRecipes": [
        {
            "id": 20,
            "amount": 1,
            "potionId": 19,
            "craftingStationId": 1,
            "craftingStation": {
                "id": 1,
                "name": "Placed Bottle/Alchemy Table",
                "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/4/43/Alchemy_Table.png",
                "potionRecipes": []
            },
            "potionIngredients": [
                {
                    "id": 67,
                    "amount": 1,
                    "ingredientId": 1,
                    "potionId": null,
                    "potionRecipeId": 20,
                    "ingredient": {
                        "id": 1,
                        "name": "Bottled Water",
                        "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/1/16/Bottled_Water.png",
                        "isHardmode": false,
                        "potionIngredients": []
                    },
                    "potion": null
                },
                {
                    "id": 68,
                    "amount": 1,
                    "ingredientId": 4,
                    "potionId": null,
                    "potionRecipeId": 20,
                    "ingredient": {
                        "id": 4,
                        "name": "Daybloom",
                        "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/0/02/Daybloom.png",
                        "isHardmode": false,
                        "potionIngredients": []
                    },
                    "potion": null
                },
                {
                    "id": 69,
                    "amount": 1,
                    "ingredientId": 26,
                    "potionId": null,
                    "potionRecipeId": 20,
                    "ingredient": {
                        "id": 26,
                        "name": "Iron Ore",
                        "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/8/87/Iron_Ore.png",
                        "isHardmode": false,
                        "potionIngredients": []
                    },
                    "potion": null
                }
            ]
        },
        {
            "id": 21,
            "amount": 1,
            "potionId": 20,
            "craftingStationId": 1,
            "craftingStation": {
                "id": 1,
                "name": "Placed Bottle/Alchemy Table",
                "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/4/43/Alchemy_Table.png",
                "potionRecipes": []
            },
            "potionIngredients": [
                {
                    "id": 70,
                    "amount": 1,
                    "ingredientId": 1,
                    "potionId": null,
                    "potionRecipeId": 21,
                    "ingredient": {
                        "id": 1,
                        "name": "Bottled Water",
                        "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/1/16/Bottled_Water.png",
                        "isHardmode": false,
                        "potionIngredients": []
                    },
                    "potion": null
                },
                {
                    "id": 71,
                    "amount": 1,
                    "ingredientId": 4,
                    "potionId": null,
                    "potionRecipeId": 21,
                    "ingredient": {
                        "id": 4,
                        "name": "Daybloom",
                        "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/0/02/Daybloom.png",
                        "isHardmode": false,
                        "potionIngredients": []
                    },
                    "potion": null
                },
                {
                    "id": 72,
                    "amount": 1,
                    "ingredientId": 27,
                    "potionId": null,
                    "potionRecipeId": 21,
                    "ingredient": {
                        "id": 27,
                        "name": "Lead Ore",
                        "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/2/2e/Lead_Ore.png",
                        "isHardmode": false,
                        "potionIngredients": []
                    },
                    "potion": null
                }
            ]
        }
    ]
},
{
    "id": 20,
    "name": "Lesser Luck Potion",
    "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/7/7b/Lesser_Luck_Potion.png",
    "potionCategoryId": 3,
    "potionCategory": {
        "id": 3,
        "label": "Luck",
        "potions": []
    },
    "potionIngredients": [],
    "potionRecipes": [
        {
            "id": 22,
            "amount": 1,
            "potionId": 20,
            "craftingStationId": 1,
            "craftingStation": {
                "id": 1,
                "name": "Placed Bottle/Alchemy Table",
                "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/4/43/Alchemy_Table.png",
                "potionRecipes": []
            },
            "potionIngredients": [
                {
                    "id": 73,
                    "amount": 1,
                    "ingredientId": 1,
                    "potionId": null,
                    "potionRecipeId": 22,
                    "ingredient": {
                        "id": 1,
                        "name": "Bottled Water",
                        "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/1/16/Bottled_Water.png",
                        "isHardmode": false,
                        "potionIngredients": []
                    },
                    "potion": null
                },
                {
                    "id": 74,
                    "amount": 1,
                    "ingredientId": 13,
                    "potionId": null,
                    "potionRecipeId": 22,
                    "ingredient": {
                        "id": 13,
                        "name": "Waterleaf",
                        "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/4/49/Waterleaf.png",
                        "isHardmode": false,
                        "potionIngredients": []
                    },
                    "potion": null
                },
                {
                    "id": 75,
                    "amount": 1,
                    "ingredientId": 20,
                    "potionId": null,
                    "potionRecipeId": 22,
                    "ingredient": {
                        "id": 20,
                        "name": "Ladybug",
                        "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/3/38/Ladybug.png",
                        "isHardmode": false,
                        "potionIngredients": []
                    },
                    "potion": null
                },
                {
                    "id": 76,
                    "amount": 1,
                    "ingredientId": 28,
                    "potionId": null,
                    "potionRecipeId": 22,
                    "ingredient": {
                        "id": 28,
                        "name": "White Pearl",
                        "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/e/e2/White_Pearl.png",
                        "isHardmode": false,
                        "potionIngredients": []
                    },
                    "potion": null
                }
            ]
        }
    ]
},
{
    "id": 21,
    "name": "Lifeforce Potion",
    "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/2/25/Lifeforce_Potion.png",
    "potionCategoryId": 1,
    "potionCategory": {
        "id": 1,
        "label": "Buff",
        "potions": []
    },
    "potionIngredients": [],
    "potionRecipes": [
        {
            "id": 23,
            "amount": 1,
            "potionId": 21,
            "craftingStationId": 1,
            "craftingStation": {
                "id": 1,
                "name": "Placed Bottle/Alchemy Table",
                "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/4/43/Alchemy_Table.png",
                "potionRecipes": []
            },
            "potionIngredients": [
                {
                    "id": 77,
                    "amount": 1,
                    "ingredientId": 1,
                    "potionId": null,
                    "potionRecipeId": 23,
                    "ingredient": {
                        "id": 1,
                        "name": "Bottled Water",
                        "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/1/16/Bottled_Water.png",
                        "isHardmode": false,
                        "potionIngredients": []
                    },
                    "potion": null
                },
                {
                    "id": 78,
                    "amount": 1,
                    "ingredientId": 29,
                    "potionId": null,
                    "potionRecipeId": 23,
                    "ingredient": {
                        "id": 29,
                        "name": "Prismite",
                        "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/b/bf/Prismite.png",
                        "isHardmode": true,
                        "potionIngredients": []
                    },
                    "potion": null
                },
                {
                    "id": 79,
                    "amount": 1,
                    "ingredientId": 3,
                    "potionId": null,
                    "potionRecipeId": 23,
                    "ingredient": {
                        "id": 3,
                        "name": "Moonglow",
                        "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/5/5b/Moonglow.png",
                        "isHardmode": false,
                        "potionIngredients": []
                    },
                    "potion": null
                },
                {
                    "id": 80,
                    "amount": 1,
                    "ingredientId": 10,
                    "potionId": null,
                    "potionRecipeId": 23,
                    "ingredient": {
                        "id": 10,
                        "name": "Shiverthorn",
                        "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/2/23/Shiverthorn.png",
                        "isHardmode": false,
                        "potionIngredients": []
                    },
                    "potion": null
                },
                {
                    "id": 81,
                    "amount": 1,
                    "ingredientId": 13,
                    "potionId": null,
                    "potionRecipeId": 23,
                    "ingredient": {
                        "id": 13,
                        "name": "Waterleaf",
                        "imageUrl": "https://static.wikia.nocookie.net/terraria_gamepedia/images/4/49/Waterleaf.png",
                        "isHardmode": false,
                        "potionIngredients": []
                    },
                    "potion": null
                }
            ]
        }
    ]
}]`)

const expectedOutput: CombinedIngredient[] = [
    {
        material: {
            id: 1,
            name: "Bottled Water",
            imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/1/16/Bottled_Water.png",
            isHardmode: false,
            potionIngredients: []
        },
        amount: 3
    },
    {
        material: {
            id: 4,
            name: "Daybloom",
            imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/0/02/Daybloom.png",
            isHardmode: false,
            potionIngredients: []
        },
        amount: 1
    },
    {
        material: {
            id: 26,
            name: "Iron Ore",
            imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/8/87/Iron_Ore.png",
            isHardmode: false,
            potionIngredients: []
        },
        amount: 1,
        group: 1
    },
    {
        material: {
            id: 27,
            name: "Lead Ore",
            imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/2/2e/Lead_Ore.png",
            isHardmode: false,
            potionIngredients: []
        },
        amount: 1,
        group: 1
    },
    {
        material: {
            id: 13,
            name: "Waterleaf",
            imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/4/49/Waterleaf.png",
            isHardmode: false,
            potionIngredients: []
        },
        amount: 2
    },
    {
        material: {
            id: 20,
            name: "Ladybug",
            imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/3/38/Ladybug.png",
            isHardmode: false,
            potionIngredients: []
        },
        amount: 1
    },
    {
        material: {
            id: 28,
            name: "White Pearl",
            imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/e/e2/White_Pearl.png",
            isHardmode: false,
            potionIngredients: []
        },
        amount: 1
    },
    {
        material: {
            id: 29,
            name: "Prismite",
            imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/b/bf/Prismite.png",
            isHardmode: true,
            potionIngredients: []
        },
        amount: 1
    },
    {
        material: {
            id: 3,
            name: "Moonglow",
            imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/5/5b/Moonglow.png",
            isHardmode: false,
            potionIngredients: []
        },
        amount: 1
    },
    {
        material: {
            id: 10,
            name: "Shiverthorn",
            imageUrl: "https://static.wikia.nocookie.net/terraria_gamepedia/images/2/23/Shiverthorn.png",
            isHardmode: false,
            potionIngredients: []
        },
        amount: 1
    }
]

const potions: Potion[] = json.filter((potion: PotionData) => potion.potionRecipes.length).map((potion: PotionData) => new Potion({ ...potion }))
potions.forEach(potion => potion.setAmount(1))

const potionIngredients = calculatePotionIngredients(potions)

test("calculatePotionIngredients returns correct ingredients and format", () => {
    expect(potionIngredients).toStrictEqual(expectedOutput)
})