use TerrariaTools
GO

INSERT INTO dbo.PotionCategory ([Label]) 
	VALUES	('')


INSERT INTO dbo.CraftingStation ([Name], ImageUrl)
	VALUES	('', '')


INSERT INTO dbo.Ingredient ([Name], ImageUrl, IsHardmode)
	VALUES	('', '', 0)
GO


INSERT INTO dbo.Potion ([Name], ImageUrl, PotionCategoryId)
	VALUES	('', '', 1)
GO


INSERT INTO dbo.PotionRecipe (Amount, PotionId, CraftingStationId)
	VALUES	(1, 1, 1)
GO


INSERT INTO dbo.PotionIngredient (Amount, IngredientId, PotionRecipeId)
	VALUES	(1, 1, 1)