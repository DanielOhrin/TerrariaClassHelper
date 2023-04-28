using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using TerrariaTools.Data.Models.Generated;

namespace TerrariaTools.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PotionsController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetPotions()
        {
            var db = new TerrariaToolsContext();

            var potions =
            await db.Potions
            .Include(x => x.PotionCategory)
            .Include(x => x.PotionRecipes)
                .ThenInclude(x => x.CraftingStation)
            .Include(x => x.PotionRecipes)
                .ThenInclude(x => x.PotionIngredients)
                    .ThenInclude(x => x.Ingredient)
            .AsNoTracking()
            .ToListAsync();

            List<PotionIngredient> ingredients = potions
                .SelectMany(potion => potion.PotionRecipes.SelectMany(recipe => recipe.PotionIngredients.Where(ing => ing.PotionId != null)))
                .ToList();

            var internalPotions = await db.Potions
                .Where(x => ingredients.Select(ing => ing.PotionId).Contains(x.Id))
                    .Include(x => x.PotionCategory)
                    .ToListAsync();

            ingredients.ForEach(ing =>
            {
                ing.Potion = internalPotions.FirstOrDefault(potion => potion.Id == ing.PotionId);
            });

            return Ok(potions);
        }
    }
}
