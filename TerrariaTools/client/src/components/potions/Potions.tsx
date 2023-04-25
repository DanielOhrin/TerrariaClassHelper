// Here, have a list of all potions that you can filter by certain things, such as game stage, type (battle, utility), etc.
// Maybe if a user is logged in, they can make their own list of potions.
// Have a link/button somewhere on the page to "Ingredient Calculator"
// Each potion will be in a <Potion> component.
// Maybe try to make a HoC because I'm sure we will have many lists of items. 
// Have the potions be little cards with plus and minus signs on them when calculating ingredients.
import { Potion } from "../../modules/types/potion"
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import PotionCard from "./PotionCard"
import { getPotions } from "../../modules/database/potions-manager"
import { Button } from "reactstrap"
import "./potions.css"
import Searchbar from "../../helpers/Searchbar"

function Potions() {
    const [potions, setPotions] = useState<Potion[]>([]),
        [filteredPotions, setFilteredPotions] = useState<Potion[]>([]),
        [showSidebar, setShowSidebar] = useState<Boolean>(false)

    const forceRender = useCallback(() => {
        setPotions([...potions])
    }, [potions])

    const onSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setFilteredPotions(potions.filter(potion => potion.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }, [potions])

    useEffect(() => {
        getPotions().then(data => {
            const basePotions = data.filter(potion => potion.potionRecipes.length).map(potion => new Potion({ ...potion }))
            setPotions(basePotions)
            setFilteredPotions(basePotions)
        })
    }, [])

    useEffect(() => {
        const selectedPotions: Potion[] = potions.filter(potion => potion.getAmount() > 0)

        setShowSidebar(selectedPotions.length > 0)
    }, [potions])

    return (
        <section id="potions--section">
            <h2>Potions</h2>
            <Searchbar label="Search for Potions" onChange={onSearchChange} />
            <article id={showSidebar ? "potions--article-left" : "potions--article-center"}>
                {
                    filteredPotions.map(potion => <PotionCard potion={potion} forceRenderParent={forceRender} />)
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