import { Cards } from "../data";
import { Transactions } from "../data";
import CardComponent from "./CardComponent";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";
import { ICard, ITransactions } from "../types";
export default function CardsComponent() {
  const TransactionsOfFirstCards = Transactions.filter(
    (trans) => trans.card_id === 1
  );
  // console.log(TransactionsOfFirstCards);
  const [card, setCard] = useState<ICard>(Cards[0]);
  const [active, setActive] = useState<number>(Cards[0].card_id);
  const [cardData, setCardData] = useState<Array<ITransactions>>(
    TransactionsOfFirstCards
  );
  useEffect(() => {
    for (let i = 0; i < Cards.length; i++) {
      if (Cards[i].card_id === active) {
        setCard(Cards.find((card) => card.card_id === active));
      }
    }
    const transactions: Array<ITransactions> = [];
    for(let i=0;i<Transactions.length;i++){
      if(Transactions[i].card_id === active){
       transactions.push(Transactions[i]);
      }
    }
    setCardData(transactions);
  }, [active]);
  const isLast = (cardId) => {
    return Cards[Cards.length - 1].card_id === cardId;
  };

  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-4">
      <div className="relative">
        <CardComponent card={card} cardData={cardData} />
        {!isLast(active) && (
          <div
            className="bg-secondary rounded-full w-8 h-8 absolute  right-0 justify-center items-center flex"
            style={{ top: "80px" }}
          >
            <AiOutlineArrowRight
              className="text-white cursor-pointer"
              onClick={() => {
                if (!isLast(active)) setActive(active + 1);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
