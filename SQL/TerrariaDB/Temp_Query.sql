SELECT i.*, w.*, t.*, p.*, b.*, f.*, fs.*, r.*, g.*, gs.*, it.*, ty.*
FROM dbo.Item i
LEFT JOIN dbo.[Group] g ON g.Id = i.GroupId
LEFT JOIN dbo.Weapon w ON w.ItemId = i.Id
LEFT JOIN dbo.Tool t ON t.ItemId = i.Id
LEFT JOIN dbo.Potion p ON p.ItemId = p.Id
LEFT JOIN dbo.Buff b ON p.BuffId = b.Id
LEFT JOIN dbo.Furniture f ON f.ItemId = i.Id
LEFT JOIN dbo.FurnitureSet fs ON fs.Id = f.FurnitureSetId
LEFT JOIN dbo.Rarity r ON r.Id = i.RarityId
LEFT JOIN dbo.GameStage gs ON gs.Id = i.GameStageId
LEFT JOIN ItemType it ON it.ItemId = i.Id
LEFT JOIN [Type] ty ON ty.Id = it.TypeId