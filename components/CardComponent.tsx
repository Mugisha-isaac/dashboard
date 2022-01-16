import { height } from "@mui/system";
import { FunctionComponent, useState } from "react"
import { ICard, ITransactions } from "../types"
import {BsFillPlusCircleFill} from 'react-icons/bs'


const CardComponent:FunctionComponent<
{card:ICard,cardData:Array<ITransactions>}
> = ({card:{card_name,exp_date,cvv,color,card_number}}) => {
    let background_color = color;
    return (
        <>
        <div style={{backgroundColor: background_color, width:'300px', height:'200px'}} className="rounded-2xl relative">
            <h6 className="uppercase text-sm pt-3 pl-3 text-small_white ">card name</h6> 
            <span className="px-3 bold text-big_white ">{card_name}</span>  
            <div className="absolute top-5" style={{right:'80px'}}>
                <div className="bg-small_white w-8 h-8 rounded-full absolute top-0 left-0"></div>
                <div className="bg-big_white w-8 h-8 rounded-full absolute top-0 left-5"></div>
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
        <div className="bg-low_dark rounded-2xl relative " style={{width:'480px', marginTop:'-240px', marginLeft:'430px', height:'540px'}} >
               <div className="border-dotted border-white bg-red-400 absolute top-5 right-5 " style={{width:'120px', height:'140px'}}>
                 <BsFillPlusCircleFill className="text-white h-7 w-7 bg-none" style={{marginTop:'20px', marginLeft:'50px'}} />
                 <p className="text-small text-white pt-10 pl-5 ">ADD CARD</p>
               </div>
               <div className=" absolute" style={{marginTop:'180px', width:'100%'}}>
                   <p className="capitalize text-xl  text-white px-8">last transactions</p>
                   <p className="px-8 text-small_white">date</p>
                   <div>
                      {/* {trans_name} */}
                   </div>
               </div>
            </div>
       </>
    )
}

export default CardComponent
