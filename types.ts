export interface ICard{
    card_id:number,
    card_name:string,
    rating: number,
    exp_date:string,
    cvv:number,
    color:string
}

export interface ITransactions{
    trans_id:number,
    trans_name:string,
    status:string,
    value:string
}