import { Potion, PotionCategoryId } from "../../modules/types/potion"
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import PotionCard from "./PotionCard"
import { getPotions } from "../../modules/database/potionsManager"
import { Button } from "reactstrap"
import "./potions.css"
import Searchbar from "../../helpers/Searchbar"
import Select from "../../helpers/Select"
import { getEnumValues } from "../../modules/functions/getEnumValues"
import { calculatePotionIngredients } from "../../modules/functions/calculatePotionIngredients"

function Potions() {
    const [potions, setPotions] = useState<Potion[]>([]),
        [filteredPotions, setFilteredPotions] = useState<Potion[]>([]),
        [potionCategoryId, setPotionCategoryId] = useState<PotionCategoryId | 0>(0),
        [searchValue, setSearchValue] = useState<string>(""),
        [showSidebar, setShowSidebar] = useState<Boolean>(false)

    const forceRender = useCallback(() => {
        setPotions([...potions])
    }, [potions])

    const resetState = useCallback(() => {
        potions.forEach(potion => potion.setAmount(0))

        setSearchValue("")
        setPotionCategoryId(0)
        setShowSidebar(false)
    }, [potions])

    /**
     * @param name Text to filter potions by name
     * @param categoryId PotionCategoryId or 0 to filter potions by
     * @updates filteredPotions state
     */
    const filterPotions = useCallback((name: string, categoryId: PotionCategoryId | 0): void => {
        let potionArray: Potion[] = [...potions]

        potionArray = potionArray.filter(potion => potion.name.toLowerCase().includes(name.toLowerCase().trim()))

        setFilteredPotions(categoryId !== 0 ? potionArray.filter(potion => potion.categoryId === categoryId) : potionArray)
    }, [potions])

    //! Initial data fetching
    useEffect(() => {
        getPotions().then(data => {
            const basePotions = data.filter(potion => potion.potionRecipes.length).map(potion => new Potion({ ...potion }))
            setPotions(basePotions)
            setFilteredPotions(basePotions)
        })
    }, [])

    //! Filter potions
    useEffect(() => {
        filterPotions(searchValue, potionCategoryId)
    }, [searchValue, potionCategoryId, filterPotions])

    //! Check whether or not to show the sidebar
    useEffect(() => {
        const selectedPotions: Potion[] = potions.filter(potion => potion.getAmount() > 0)

        setShowSidebar(selectedPotions.length > 0)
    }, [potions])

    return (
        <section id="potions--section">
            <h2>Potions</h2>
            <section id="potions-filters--section">
                <Searchbar
                    label="Search for Potions"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
                    value={searchValue} />
                <Select
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setPotionCategoryId(parseInt(e.target.value))}
                    values={[{ label: "All", value: "0" }, ...getEnumValues(PotionCategoryId)]}
                    name={"select"}
                    label={"Category"}
                    value={potionCategoryId} />
                <Button onClick={resetState}>Reset</Button>
            </section>
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
                    <Button color="primary" onClick={() => console.log(calculatePotionIngredients(potions))}>Calculate Ingredients</Button>
                </aside>
            }
        </section>
    )
}

export default Potions