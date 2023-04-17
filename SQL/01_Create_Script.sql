use [master]
GO

DROP DATABASE IF EXISTS TerrariaTools
GO

CREATE DATABASE TerrariaTools
GO

use TerrariaTools
GO

CREATE TABLE Ingredient (
	Id int PRIMARY KEY IDENTITY,
	[Name] nvarchar(50),
	ImageUrl nvarchar(200),
	IsHardmode bit,

	CONSTRAINT [UQ_Ingredient_Name] UNIQUE([Name])
)

CREATE TABLE PotionCategory (
	Id int PRIMARY KEY IDENTITY,
	[Label] nvarchar(50),

	CONSTRAINT [UQ_PotionCategory_Label] UNIQUE([Label])
)

CREATE TABLE Potion (
	Id int PRIMARY KEY IDENTITY,
	[Name] nvarchar(50),
	ImageUrl nvarchar(200),
	PotionCategoryId int,

	CONSTRAINT [UQ_Potion_Name] UNIQUE([Name]),
	CONSTRAINT [FK_Potion_PotionCategoryId] FOREIGN KEY (PotionCategoryId) REFERENCES PotionCategory(Id)
)

CREATE TABLE CraftingStation (
	Id int PRIMARY KEY IDENTITY,
	[Name] nvarchar(50),
	ImageUrl nvarchar(200),

	CONSTRAINT [UQ_CraftingStation_Name] UNIQUE([Name])
)

CREATE TABLE PotionRecipe (
	Id int PRIMARY KEY IDENTITY,
	Amount int,
	PotionId int,
	CraftingStationId int,

	CONSTRAINT [FK_PotionRecipe_PotionId] FOREIGN KEY (PotionId) REFERENCES Potion(Id),
	CONSTRAINT [FK_PotionRecipe_CraftingStationId] FOREIGN KEY (CraftingStationId) REFERENCES CraftingStation(Id)
)

CREATE TABLE PotionIngredient (
	Id int PRIMARY KEY IDENTITY,
	Amount int,
	PotionRecipeId int,
	IngredientId int,

	CONSTRAINT [FK_PotionIngredient_PotionRecipeId] FOREIGN KEY (PotionRecipeId) REFERENCES PotionRecipe(Id),
	CONSTRAINT [FK_PotionIngredient_IngredientId] FOREIGN KEY (IngredientId) REFERENCES Ingredient(Id)
)