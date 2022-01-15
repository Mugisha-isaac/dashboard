export interface ICard{
    card_id:number,
    card_name:string,
    card_number:number,
    exp_date:string,
    cvv:number,
    color:string
}

export interface ITransactions{
    card_id:number,
    trans_id:number,
    trans_name:string,
    status:string,
    value:string,
    date:string,
    time:string,
}