namespace TerrariaTools.Data.Models.Generated;

public partial class Potion
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? ImageUrl { get; set; }

    public int? PotionCategoryId { get; set; }

    public virtual PotionCategory? PotionCategory { get; set; }

    public virtual ICollection<PotionIngredient> PotionIngredients { get; set; } = new List<PotionIngredient>();

    public virtual ICollection<PotionRecipe> PotionRecipes { get; set; } = new List<PotionRecipe>();
}
