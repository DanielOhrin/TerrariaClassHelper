use [Terraria] 
GO

INSERT INTO dbo.Rarity ([Label]) 
	VALUES  ('Gray'), 
			('White'), 
			('Blue'), 
			('Green'), 
			('Orange'), 
			('Light Red'),
			('Pink'), 
			('Light Purple'),
			('Lime'),
			('Yellow'),
			('Cyan'),
			('Red'),
			('Purple'),
			('Rainbow'),
			('Fiery Red'),
			('Amber')


INSERT INTO dbo.GameStage ([Label], IsHardmode) 
	VALUES	('Pre-Boss', 0),
			('Pre-Hardmode', 0), 
			('Pre-Mechanical Bosses', 1), 
			('Pre-Plantera', 1), 
			('Pre-Golem', 1), 
			('Pre-Lunar Events', 1), 
			('Endgame', 1)
		

INSERT INTO dbo.[Group] ([Label])
	VALUES	('Wood'),
			('Torch'),
			('Iron Bar')
		

INSERT INTO dbo.[Type] ([Label]) 
	VALUES	('Tool'),
			('Block'),
			('Crafting Material'),
			('Weapon'),
			('Potion'),
			('Furniture'),
			('Light Source')


INSERT INTO dbo.ToolType ([Label]) 
	VALUES	('Pickaxe'),
			('Hammer'),
			('Axe')


INSERT INTO dbo.DamageType ([Label])
	VALUES	('Melee')


INSERT INTO dbo.WeaponType ([Label])
	VALUES	('Sword')


INSERT INTO dbo.FurnitureSet ([Label])
	VALUES	('Crafting Station'),
			('Light Source'),
			('Storage'),
			('Functional'),
			('Decorative')

INSERT INTO dbo.Buff ([Name], InternalName, Tooltip, Duration, ImageUrl, IsDebuff)
	VALUES	('Obsidian Skin', 'ObsidianSkin', 'Immune to lava', 360, '8/8d/Obsidian_Skin.png/revision/latest?cb=20170708212652&format=original', 0),
			('Regeneration', 'Regeneration', 'Provides life regeneration', 480, '5/53/Regeneration.png/revision/latest?cb=20170708212746&format=original', 0),
			('Swiftness', 'Swiftness', '25% increased movement speed', 480, 'a/af/Swiftness.png/revision/latest?cb=20170708212804&format=original', 0),
			('Gills', 'Gills', 'Breathe water instead of air', 240, 'f/fc/Gills.png/revision/latest?cb=20170708212829&format=original', 0),
			('Ironskin', 'Ironskin', 'Increase defense by 8', 480, '3/3d/Ironskin.png/revision/latest?cb=20170708212849&format=original', 0),
			('Mana Regeneration', 'MagicRegeneration', 'Increased mana regeneration', 480, '7/77/Mana_Regeneration.png/revision/latest?cb=20170708212927&format=original', 0),
			('Magic Power', 'MagicPower', '20% increased magic damage', 240, 'c/cd/Magic_Power.png/revision/latest?cb=20170708212954&format=original', 0),
			('Featherfall', 'Featherfall', 'Press UP or DOWN to control speed of descent', 600, 'b/be/Featherfall.png/revision/latest?cb=20170708213002&format=original', 0),
			('Spelunker', 'Spelunker', 'Shows the location of treasure and ore', 300, 'c/c6/Spelunker.png/revision/latest?cb=20170708213019&format=original', 0),
			('Invisibility', 'Invisibility', 'Grants invisibility', 180, 'e/e5/Invisibility.png/revision/latest?cb=20170708213104&format=original', 0),
			('Shine', 'Shine', 'Emitting light', 600, '2/2a/Shine.png/revision/latest?cb=20170708213104&format=original', 0),
			('Night Owl', 'NightOwl', 'Increased night vision', 600, '1/1d/Night_Owl.png/revision/latest?cb=20170708213117&format=original', 0),
			('Battle', 'Battle', 'Increased enemy spawn rate', 420, '7/70/Battle.png/revision/latest?cb=20170708213142&format=original', 0),
			('Thorns', 'Thorns', 'Attackers also take damage', 480, '9/9e/Thorns.png/revision/latest?cb=20170708213159&format=original', 0),
			('Water Walking', 'WaterWalking', 'Press DOWN to enter water', 600, '5/51/Water_Walking.png/revision/latest?cb=20170708213220&format=original', 0),
			('Archery', 'Archery', '10% increased bow damage and 20% increased arrow speed', 480, '9/98/Archery.png/revision/latest?cb=20170708213236&format=original', 0),
			('Hunter', 'Hunter', 'Shows the location of enemies', 480, '4/4b/Hunter.png/revision/latest?cb=20170708213256&format=original', 0),
			('Gravitation', 'Gravitation', 'Press UP to reverse gravity', 180, '3/30/Gravitation.png/revision/latest?cb=20170708213326&format=original', 0),
			('Shadow Orb', 'ShadowOrb', 'A magical orb that provides light', NULL, '8/8a/Shadow_Orb_%28buff%29.png/revision/latest?cb=20170715161644&format=original', 0),
			('Poisoned', 'Poisoned', 'Slowly losing life', NULL, '1/11/Poisoned.png/revision/latest?cb=20170708221026&format=original', 1),
			('Potion Sickness', 'PotionSickness', 'Cannot consume anymore healing items', 60, '8/83/Potion_Sickness.png/revision/latest?cb=20170708220957&format=original', 1)
GO


INSERT INTO dbo.Item ([Name], InternalName, Tooltip, MaxStackAmount, SellPrice, ResearchPoints, ImageUrl, RarityId, GameStageId, GroupId) 
	VALUES	('Iron Pickaxe', 'IronPickaxe', NULL, 1, 40, 1, 'a/a2/Iron_Pickaxe.png/revision/latest?cb=20200516214316&format=original', 0, 1, NULL),
			('Dirt Block', 'DirtBlock', NULL, 9999, 0, 100, '5/55/Dirt_Block.png/revision/latest?cb=20200516211400&format=original', 0, 1, NULL),
			('Stone Block', 'StoneBlock', NULL, 9999, 0, 100, '3/37/Stone_Block.png/revision/latest?cb=20200516222613&format=original', 0, 1, NULL),
			('Iron Broadsword', 'IronBroadsword', NULL, 1, 360, 1, 'c/cf/Iron_Broadsword.png/revision/latest?cb=20221121015053&format=original', 0, 1, NULL),
			('Mushroom', 'Mushroom', NULL, 9999, 250, 30, '8/8c/Mushroom.png/revision/latest?cb=20200516215553&format=original', 0, 1, NULL),
			('Iron Shortsword', 'IronShortsword', NULL, 1, 280, 1, 'c/c8/Iron_Shortsword.png/revision/latest?cb=20200516214319&format=original', 0, 1, NULL),
			('Iron Hammer', 'IronHammer', NULL, 1, 320, 1, '0/0a/Iron_Hammer.png/revision/latest?cb=20221121011546&format=original', 0, 1, NULL),
			('Torch', 'Torch', 'Provides light', 999, NULL, NULL, 'b/b2/Torch.png/revision/latest?cb=20200516223044', 0, 1, 2),
			('Wood', 'Wood', NULL, 9999, NULL, 100, 'd/df/Wood.png/revision/latest?cb=20200516223631&format=original', 0, 1, 1),
			('Iron Axe', 'IronAxe', NULL, 1, 320, 1, '8/81/Iron_Axe.png/revision/latest?cb=20221121015518&format=original', 0, 1, NULL)
GO


INSERT INTO dbo.ItemType (TypeId, ItemId) 
	VALUES	(1, 1),
			(2, 2),
			(3, 2),
			(2, 3),
			(3, 3),
			(4, 4),
			(5, 5),
			(3, 5),
			(4, 6),
			(1, 7),
			(3, 8),
			(6, 8),
			(7, 8),
			(2, 9),
			(3, 9),
			(1, 10)


INSERT INTO dbo.Tool(HammerPower, AxePower, PickaxePower, Damage, Bonus, UseTime, MiningSpeed, Knockback, DamageTypeId, ToolTypeId, ItemId)
	VALUES	(0, 0, 40, 5, NULL, 20, 13, 2, 1, 1, 1),
			(40, 0, 0, 7, NULL, 30, 20, 5.5, 1, 2, 7),
			(0, 45, 0, 5, NULL, 27, 19, 4.5, 1, 3, 10)


INSERT INTO dbo.Weapon (Damage, Knockback, CriticalChance, UseTime, Velocity, IsAutoSwing, DamageTypeId, WeaponTypeId, ItemId)
	VALUES	(12, 5.5, 4, 20, NULL, 0, 1, 1, 4),
			(8, 4, 4, 12, 4.2, 0, 1, 1, 6)


	-- ALL potions are consumables
INSERT INTO dbo.Potion (UseTime, HealthRecovered, ManaRecovered, BuffId, ItemId)
	VALUES	(17, 15, NULL, 21, 5)
			

INSERT INTO dbo.Furniture (UseTime, IsPlaceable, IsCraftingStation, FurnitureSetId, ItemId)
	VALUES	(15, 1, 0, 2, 8)
--INSERT INTO dbo.ArmorSlot ([Label]) VALUES ()
