using System;
using System.Collections.Generic;

namespace TerrariaTools.Data.Models.Generated;

public partial class Material
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? ImageUrl { get; set; }

    public bool? IsHardmode { get; set; }

    public virtual ICollection<PotionIngredient> PotionIngredients { get; set; } = new List<PotionIngredient>();
}
