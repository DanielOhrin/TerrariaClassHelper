using System;
using System.Collections.Generic;

namespace TerrariaTools.Data.Models.Generated;

public partial class PotionIngredient
{
    public int Id { get; set; }

    public int? Amount { get; set; }

    public int? IngredientId { get; set; }

    public int? PotionId { get; set; }

    public int? PotionRecipeId { get; set; }

    public virtual Material? Ingredient { get; set; }

    public virtual Potion? Potion { get; set; }

    public virtual PotionRecipe? PotionRecipe { get; set; }
}
