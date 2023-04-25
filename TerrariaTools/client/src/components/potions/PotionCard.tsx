import { Button, ButtonGroup, Card, CardBody, CardTitle } from "reactstrap"
import { Potion } from "../../modules/types/potion"
import { useCallback } from "react"

interface PotionCardProps {
    potion: Potion,
    forceRenderParent: Function
}

function PotionCard({ potion, forceRenderParent }: PotionCardProps) {
    const add = useCallback(() => {
        potion.setAmount(potion.getAmount() + 1)
        forceRenderParent()
    }, [potion, forceRenderParent])

    const subtract = useCallback(() => {
        const amount = potion.getAmount()

        if (amount > 0) {
            potion.setAmount(amount - 1)
            forceRenderParent()
        }
    }, [potion, forceRenderParent])

    return (
        <Card className="potion--card">
            <img className="potion--img" src={potion.imageUrl} alt="" />
            <CardBody className="potion--card-body">
                <CardTitle tag="h5">{potion.name}</CardTitle>
                <h4>{potion.getAmountCrafted()}</h4>
                <ButtonGroup className="potion--card--buttons">
                    <Button onClick={subtract}>-</Button>
                    <Button onClick={add}>+</Button>
                </ButtonGroup>
            </CardBody>
        </Card>
    )
}

export default PotionCard