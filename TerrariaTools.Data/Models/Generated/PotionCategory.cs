using System;
using System.Collections.Generic;

namespace TerrariaTools.Data.Models.Generated;

public partial class PotionCategory
{
    public int Id { get; set; }

    public string? Label { get; set; }

    public virtual ICollection<Potion> Potions { get; set; } = new List<Potion>();
}
