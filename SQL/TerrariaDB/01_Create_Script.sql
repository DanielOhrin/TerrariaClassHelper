use [master]
GO

DROP DATABASE IF EXISTS Terraria
GO

CREATE DATABASE Terraria
GO

use [Terraria]
GO

CREATE TABLE Rarity (
	Id int PRIMARY KEY IDENTITY(-1, 1),
	[Label] nvarchar(25),
	--Possibly add description

	CONSTRAINT [UQ_Rarity_Label] UNIQUE([Label])
)

CREATE TABLE GameStage (
	Id int PRIMARY KEY IDENTITY,
	[Label] nvarchar(50),
	IsHardmode bit,

	CONSTRAINT [UQ_GameStage_Label] UNIQUE([Label])
)

CREATE TABLE [Group] (
	Id int PRIMARY KEY IDENTITY,
	[Label] nvarchar(50),

	CONSTRAINT [UQ_Group_Label] UNIQUE([Label])
)

CREATE TABLE Item (
	Id int PRIMARY KEY IDENTITY,
	[Name] nvarchar(100),
	InternalName nvarchar(100),
	Tooltip nvarchar(300),
	MaxStackAmount int,
	SellPrice int,
	ResearchPoints int,
	ImageUrl nvarchar(200),
	RarityId int,
	GameStageId int,
	GroupId int,

	CONSTRAINT [UQ_Item_Name] UNIQUE([Name]),
	CONSTRAINT [UQ_Item_InternalName] UNIQUE([InternalName]),
	CONSTRAINT [FK_Item_RarityId] FOREIGN KEY (RarityId) REFERENCES Rarity(Id),
	CONSTRAINT [FK_Item_GameStageId] FOREIGN KEY (GameStageId) REFERENCES GameStage(Id),
	CONSTRAINT [FK_Item_GroupId] FOREIGN KEY (GroupId) REFERENCES [Group](Id)
)

CREATE TABLE [Type] (
	Id int PRIMARY KEY IDENTITY,
	[Label] nvarchar(50),
	
	CONSTRAINT [UQ_Type_Label] UNIQUE([Label])
)

CREATE TABLE ItemType (
	Id int PRIMARY KEY IDENTITY,
	ItemId int,
	TypeId int,

	CONSTRAINT [FK_ItemType_ItemId] FOREIGN KEY (ItemId) REFERENCES Item(Id),
	CONSTRAINT [FK_ItemType_TypeId] FOREIGN KEY (TypeId) REFERENCES [Type](Id)
)

CREATE TABLE ToolType (
	Id int PRIMARY KEY IDENTITY,
	[Label] nvarchar(50),

	CONSTRAINT [UQ_ToolType_Label] UNIQUE([Label])
)

CREATE TABLE DamageType (
	Id int PRIMARY KEY IDENTITY,
	[Label] nvarchar(50),

	CONSTRAINT [UQ_DamageType_Label] UNIQUE([Label])
)

CREATE TABLE Tool (
	Id int PRIMARY KEY IDENTITY,
	HammerPower int,
	AxePower int,
	PickaxePower int,
	Damage int,
	Bonus nvarchar(25),
	UseTime int,
	MiningSpeed int,
	Knockback dec(18, 2),
	DamageTypeId int,
	ToolTypeId int,
	ItemId int,

	CONSTRAINT [FK_Tool_DamageType] FOREIGN KEY (DamageTypeId) REFERENCES DamageType(Id),
	CONSTRAINT [FK_Tool_ItemId] FOREIGN KEY (ItemId) REFERENCES Item(Id),
	CONSTRAINT [FK_Tool_ToolTypeId] FOREIGN KEY (ToolTypeId) REFERENCES ToolType(Id)
)

CREATE TABLE WeaponType (
	Id int PRIMARY KEY IDENTITY,
	[Label] nvarchar(50),

	CONSTRAINT [UQ_WeaponType_Label] UNIQUE([Label])
)


CREATE TABLE Weapon (
	Id int PRIMARY KEY IDENTITY,
	Damage int,
	Knockback dec(18, 2),
	CriticalChance int,
	UseTime int,
	Velocity int,
	IsAutoSwing bit,
	DamageTypeId int,
	WeaponTypeId int,
	ItemId int,

	CONSTRAINT [FK_Weapon_DamageTypeId] FOREIGN KEY (DamageTypeId) REFERENCES DamageType(Id),
	CONSTRAINT [FK_Weapon_WeaponTypeId] FOREIGN KEY (WeaponTypeId) REFERENCES WeaponType(Id),
	CONSTRAINT [FK_Weapon_ItemId] FOREIGN KEY (ItemId) REFERENCES Item(Id)
)

CREATE TABLE AmmunitionType (
	Id int PRIMARY KEY IDENTITY,
	[Label] nvarchar(50),

	CONSTRAINT [UQ_AmmunitionType_Label] UNIQUE([Label])
)

CREATE TABLE Ammunition (
	Id int PRIMARY KEY IDENTITY,
	Damage int,
	Velocity dec(18, 2),
	VelocityMultiplier int,
	Knockback dec(18, 2),
	AmmunitionTypeId int,
	ItemId int,

	CONSTRAINT [FK_Ammunition_AmmunitionTypeId] FOREIGN KEY (AmmunitionTypeId) REFERENCES AmmunitionType(Id),
	CONSTRAINT [FK_Ammunition_ItemId] FOREIGN KEY (ItemId) REFERENCES Item(Id)
)

CREATE TABLE ArmorSet (
	Id int PRIMARY KEY IDENTITY,
	[Label] nvarchar(50),
	Bonus nvarchar(200),

	CONSTRAINT [UQ_ArmorSet_Label] UNIQUE([Label])
)

CREATE TABLE ArmorSlot (
	Id int PRIMARY KEY IDENTITY,
	[Label] nvarchar(20),

	CONSTRAINT [UQ_ArmorSlot_Label] UNIQUE([Label])
)

CREATE TABLE Armor (
	Id int PRIMARY KEY IDENTITY,
	Defense int,
	ArmorSetId int,
	ArmorSlotId int,
	ItemId int,

	CONSTRAINT [FK_Armor_ArmorSetId] FOREIGN KEY (ArmorSetId) REFERENCES ArmorSet(Id),
	CONSTRAINT [FK_Armor_ArmorSlotId] FOREIGN KEY (ArmorSlotId) REFERENCES ArmorSlot(Id),
	CONSTRAINT [FK_Armor_ItemId] FOREIGN KEY (ItemId) REFERENCES Item(Id)
)

CREATE TABLE Bait (
	Id int PRIMARY KEY IDENTITY,
	[Power] int,
	UseTime int,
	IsConsumable bit,
	ItemId int,

	CONSTRAINT [FK_Bait_ItemId] FOREIGN KEY (ItemId) REFERENCES Item(Id)
)

CREATE TABLE Bar (
	Id int PRIMARY KEY IDENTITY,
	UseTime int,
	IsPlaceable bit,
	ItemId int,

	CONSTRAINT [FK_Bar_ItemId] FOREIGN KEY (ItemId) REFERENCES Item(Id)
)

CREATE TABLE FurnitureSet (
	Id int PRIMARY KEY IDENTITY,
	[Label] nvarchar(50),

	CONSTRAINT [UQ_FurnitureSet_Label] UNIQUE([Label])
)

CREATE TABLE Furniture (
	Id int PRIMARY KEY IDENTITY,
	UseTime int,
	IsPlaceable bit,
	IsCraftingStation bit,
	FurnitureSetId int,
	ItemId int,

	CONSTRAINT [FK_Furniture_FurnitureSetId] FOREIGN KEY (FurnitureSetId) REFERENCES FurnitureSet(Id),
	CONSTRAINT [FK_Furniture_ItemId] FOREIGN KEY (ItemId) REFERENCES Item(Id)
)

--TODO: Make a table to store the possible drops for GrabBags
CREATE TABLE GrabBag ( --Like a lootbox or something you can open for rewards
	Id int PRIMARY KEY IDENTITY,
	[Label] nvarchar(50),
	UseTime int,
	IsPlaceable bit,
	ItemId int,

	CONSTRAINT [UQ_GrabBag_Label] UNIQUE([Label]),
	CONSTRAINT [FK_GrabBag_ItemId] FOREIGN KEY (ItemId) REFERENCES Item(Id)
)

CREATE TABLE Buff (
	Id int PRIMARY KEY IDENTITY,
	[Name] nvarchar(50),
	InternalName nvarchar(50),
	Tooltip nvarchar(100),
	Duration int, --Seconds the buff lasts
	ImageUrl nvarchar(200),
	IsDebuff bit,

	CONSTRAINT [UQ_Buff_Label] UNIQUE([Name]),
	CONSTRAINT [UQ_Buff_InternalName] UNIQUE (InternalName)
)

CREATE TABLE Potion (
	Id int PRIMARY KEY IDENTITY,
	UseTime int,
	HealthRecovered int,
	ManaRecovered int,
	BuffId int,
	ItemId int,

	CONSTRAINT [FK_Potion_BuffId] FOREIGN KEY (BuffId) REFERENCES Buff(Id),
	CONSTRAINT [FK_Potion_ItemId] FOREIGN KEY (ItemId) REFERENCES Item(Id)
)