using System;
using System.Collections.Generic;

namespace TerrariaTools.Data.Models.Generated;

public partial class CraftingStation
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? ImageUrl { get; set; }

    public virtual ICollection<PotionRecipe> PotionRecipes { get; set; } = new List<PotionRecipe>();
}
