import { height } from "@mui/system";
import { FunctionComponent, useState } from "react"
import { ICard } from "../types"


const CardComponent:FunctionComponent<
{card:ICard}
> = ({card:{card_name,rating,exp_date,cvv,color,card_id}}) => {
    let background_color = color;
    return (
        <div style={{backgroundColor: background_color, width:'300px', height:'200px'}} className="rounded-lg">
            <h6 className="capitalize text-sm pt-3 pl-3">card name</h6>   
        </div>
       
    )
}

export default CardComponent
