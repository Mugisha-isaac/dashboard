import {Cards} from '../data'
import CardComponent from './CardComponent'
export default function CardsComponent() {
    return(
        <div>
            {
                Cards.map(card=>(
                    <div className='flex flex-wrap'>
                        <CardComponent card={card} key={card.card_name} />
                    </div>
                ))
            }
        </div>
    )
}