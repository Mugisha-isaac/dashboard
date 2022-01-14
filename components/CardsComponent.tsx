import {Cards} from '../data'
import CardComponent from './CardComponent'
export default function CardsComponent() {
    return(
        <div className='grid grid-cols-2 grid-rows-1 gap-4'>
            {
                Cards.map(card=>(
                    <div className='relative'>
                        <CardComponent card={card} key={card.card_id} />
                    </div>
                ))
            }
        </div>
    )
}