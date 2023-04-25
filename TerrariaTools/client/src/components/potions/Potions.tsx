// Here, have a list of all potions that you can filter by certain things, such as game stage, type (battle, utility), etc.
// Maybe if a user is logged in, they can make their own list of potions.
// Have a link/button somewhere on the page to "Ingredient Calculator"
// Each potion will be in a <Potion> component.
// Maybe try to make a HoC because I'm sure we will have many lists of items. 
// Have the potions be little cards with plus and minus signs on them when calculating ingredients.
import { Potion } from "../../modules/types/potion"
import { useCallback, useEffect, useState } from "react"
import PotionCard from "./PotionCard"
import { getPotions } from "../../modules/database/potions-manager"
import { Button } from "reactstrap"
import "./potions.css"

function Potions() {
    const [potions, setPotions] = useState<Potion[]>([]),
        [showSidebar, setShowSidebar] = useState<Boolean>(false)

    const forceRender = useCallback(() => {
        setPotions([...potions])
    }, [potions])

    useEffect(() => {
        getPotions().then(data => {
            setPotions(data.filter(potion => potion.potionRecipes.length).map(potion => new Potion({ ...potion })))
        })
    }, [])

    useEffect(() => {
        const selectedPotions: Potion[] = potions.filter(potion => potion.getAmount() > 0)

        setShowSidebar(selectedPotions.length > 0)
    }, [potions])

    return (
        <section id="potions--section">
            <h2>Potions</h2>
            <article id={showSidebar ? "potions--article--left" : "potions--article--center"}>
                {
                    potions.map(potion => <PotionCard potion={potion} forceRenderParent={forceRender} />)
                }
            </article>
            {
                showSidebar &&
                <aside id="potions--aside" /* sidebar */ >
                    <section id="potions--aside-list">
                        {potions.map(potion => potion.getAmount() > 0 ? <div>{potion.name}: {potion.getAmountCrafted()}x</div> : <></>)}
                    </section>
                    <Button color="primary">Calculate Ingredients</Button>
                </aside>
            }
        </section>
    )
}

export default Potions