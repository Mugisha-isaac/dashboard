import { height } from "@mui/system";
import { FunctionComponent, useState } from "react"
import { ICard } from "../types"


const CardComponent:FunctionComponent<
{card:ICard}
> = ({card:{card_name,exp_date,cvv,color,card_number}}) => {
    let background_color = color;
    return (
        <div style={{backgroundColor: background_color, width:'300px', height:'200px'}} className="rounded-2xl">
            <h6 className="uppercase text-sm pt-3 pl-3 text-small_white ">card name</h6> 
            <span className="px-3 bold text-big_white ">{card_name}</span>  
            <div>
            </div>
            <div className="px-3  mt-8 ">
              <span className="text-xl text-white">&#x22C6; &#x22C6; &#x22C6;&#x22C6;</span>  <span className="text-xl text-white" >&#x22C6; &#x22C6; &#x22C6; &#x22C6;</span>   <span className="text-xl text-white">&#x22C6; &#x22C6; &#x22C6; &#x22C6;</span>
              <span className="text-big_white px-2 text-lg">{card_number}</span>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 gap-0 text-small_white">
                <div className="grid grid-cols-1 grid-rows-2 mt-6 relative ml-3">
                    <span className="text-sm">EXP DATE</span>
                    <span className="text-sm text-big_white">{exp_date}</span>
                </div>
                <div className="grid grid-cols-1 grid-rows-2  absolute" style={{top:'140px', left:'100px'}} >
                    <span className="text-sm">CVV NUMBER</span>
                    <span className="text-sm text-big_white">{cvv}</span>
                </div>
            </div>
        </div>
       
    )
}

export default CardComponent
