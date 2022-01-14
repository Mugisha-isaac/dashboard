import {Cards} from '../data'
import CardComponent from './CardComponent'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { useEffect, useState } from 'react';
import { ICard } from '../types';
export default function CardsComponent() {
   const [card,setCard] = useState<ICard>(Cards[0]);
   const handleCard = ()=>{
    for(let i=0;i<Cards.length;i++){
        console.log(Cards[i]);
        return Cards[i];
       }
      
   }
  
    return(
        <div className='grid grid-cols-2 grid-rows-1 gap-4'>
                    <div className='relative'>
                        <CardComponent card={card}/>
                        <div className="bg-secondary rounded-full w-8 h-8 absolute  right-0 justify-center items-center flex" style={{top:'80px'}}>
                       <AiOutlineArrowRight className="text-white cursor-pointer"/>
                       </div>
                    </div>
        </div>
    )
}