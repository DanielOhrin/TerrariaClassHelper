// Here, have a list of all potions that you can filter by certain things, such as game stage, type (battle, utility), etc.
// Maybe if a user is logged in, they can make their own list of potions.
// Have a link/button somewhere on the page to "Ingredient Calculator"
// Each potion will be in a <Potion> component.
// Maybe try to make a HoC because I'm sure we will have many lists of items. 
// Have the potions be little cards with plus and minus signs on them when calculating ingredients.
import "./potions.css"
import { Potion as PotionData, PotionCategory } from "../../modules/potion"

function Potions() {
    return (
        <section id="potions--section">
            <h2>Potions</h2>
            <article id="potions--article">
                
            </article>
        </section>
    )
}

export default Potions