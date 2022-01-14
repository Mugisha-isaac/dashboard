import { height } from "@mui/system";
import { FunctionComponent, useState } from "react"
import { ICard } from "../types"
import {AiOutlineArrowRight} from 'react-icons/ai'

const CardComponent:FunctionComponent<{card:ICard}> = ({card:{card_name,rating,exp_date,cvv,color,card_id}}) => {
    let background_color = color;
    const [active, setActive] = useState<number>(card_id);
    return (
        <div style={{backgroundColor: background_color, width:'300px', height:'200px'}} className="rounded-lg relative">
            <h6 className="capitalize text-sm pt-3 pl-3">card name</h6>
            <div className="bg-red-400 rounded-full w-7 h-7 absolute top-6 right-0 justify-center items-center flex">
            <AiOutlineArrowRight className="text-white" />
            </div>
        </div>
       
    )
}

export default CardComponent
