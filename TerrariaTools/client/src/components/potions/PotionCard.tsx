import { Button, ButtonGroup, Card, CardBody, CardTitle } from "reactstrap"
import { Potion } from "../../modules/types/potion"
import { useCallback, useEffect, useState } from "react"

interface PotionCardProps {
    potion: Potion
}

function PotionCard({ potion }: PotionCardProps) {
    const [amountCrafted, setAmountCrafted] = useState<number>(potion.getAmountCrafted())

    const add = useCallback(() => {
        potion.setAmount(potion.getAmount() + 1)
        setAmountCrafted(potion.getAmountCrafted())
    }, [potion])

    const subtract = useCallback(() => {
        const amount = potion.getAmount()

        if (amount > 0) {
            potion.setAmount(amount - 1)
            setAmountCrafted(potion.getAmountCrafted())
        }
    }, [potion])

    return (
        <Card className="potion--card">
            <img className="potion--img" src={potion.imageUrl.split('/revision')[0] + "?format=original"} alt="" />
            <CardBody className="potion--card-body">
                <CardTitle tag="h5">{potion.name}</CardTitle>
                <h4>{amountCrafted}</h4>
                <ButtonGroup className="potion--card--buttons">
                    <Button onClick={subtract}>-</Button>
                    <Button onClick={add}>+</Button>
                </ButtonGroup>
            </CardBody>
        </Card>
    )
}

export default PotionCard

function add() {

}

function subtract() {

}