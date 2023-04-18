using Microsoft.AspNetCore.Http;
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
        public IActionResult GetPotions()
        {
            var db = new TerrariaToolsContext();

            List<Potion> potions = db.Potions.Include(x => x.PotionCategory).Include(x => x.PotionRecipes).ThenInclude(x => x.CraftingStation).Include(x => x.PotionRecipes).ThenInclude(x => x.PotionIngredients).ThenInclude(x => x.Ingredient).AsNoTracking().ToList();
            
            return Ok(potions);
        }
    }
}
