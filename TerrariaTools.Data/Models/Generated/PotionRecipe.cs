using System;
using System.Collections.Generic;

namespace TerrariaTools.Data.Models.Generated;

public partial class PotionRecipe
{
    public int Id { get; set; }

    public int? Amount { get; set; }

    public int? PotionId { get; set; }

    public int? CraftingStationId { get; set; }

    public virtual CraftingStation? CraftingStation { get; set; }

    public virtual Potion? Potion { get; set; }

    public virtual ICollection<PotionIngredient> PotionIngredients { get; set; } = new List<PotionIngredient>();
}
