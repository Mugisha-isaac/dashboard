import { FunctionComponent } from "react"
import { ICard } from "../types"

const CardComponent:FunctionComponent<{card:ICard}> = ({card:{card_name,rating,exp_date,cvv,color}}) => {
    let background_color = color;
    return (
        <div style={{backgroundColor: background_color}} className="rounded-lg w-40 h-20">
            <p>{card_name}</p>
        </div>
    )
}

export default CardComponent
