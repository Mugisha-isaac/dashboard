import { ICard, ITransactions } from './types'


export const Cards:ICard[]= [
    {
        card_id:1,
        card_name:'HAGENIMANA Yassin',
        card_number:8981,
        exp_date:'17/22',
        cvv:1884,
        color: '#32B3A7'
    },
    {
        card_id:2,
        card_name:'NIYOGITARE Patrick',
        card_number:7021,
        exp_date:'18/24',
        cvv:2078,
        color: '#F29943'
    },
    {
        card_id:3,
        card_name:'TUYISHIME Jean Damour',
        card_number:5067,
        exp_date:'10/26',
        cvv:2148,
        color: '#32B3A7'
    },
    {
        card_id:4,
        card_name:'SAUVE Jean Luc',
        card_number:4523,
        exp_date:'12/27',
        cvv:20748,
        color: '#F29943'
    }
]


export const Transactions:ITransactions[]=[
    {
        card_id:1,
        trans_id:1,
        trans_name:'Transfer to Viola',
        status:'credit',
        value:'124,00',
        date:'27 April 2022',
        time:'12:00 pm'
    },
    {
        card_id:1,
        trans_id:2,
        trans_name:'AprilPayment',
        status:'payment',
        value:'900,00',
        date:'27 April 2022',
        time:'14:23 pm'
    },
    {
        card_id:1,
        trans_id:3,
        trans_name:'Transfer from Vicky',
        status:'Debit',
        value:'3,000,00',
        date:'27 April 2022',
        time:'14:23 pm'
    },
    {
        card_id:1,
        trans_id:4,
        trans_name:'Transfer to Viola',
        status:'credit',
        value:'124,00',
        date:'27 April 2022',
        time:'14:23 pm'
    },

    {
        card_id:2,
        trans_id:1,
        trans_name:'Transfer to Viola',
        status:'credit',
        value:'124,00',
        date:'27 April 2022',
        time:'12:00 pm'
    },
    {
        card_id:2,
        trans_id:2,
        trans_name:'AprilPayment',
        status:'payment',
        value:'900,00',
        date:'27 April 2022',
        time:'14:23 pm'
    },
    {
        card_id:2,
        trans_id:3,
        trans_name:'Transfer from Vicky',
        status:'Debit',
        value:'3,000,00',
        date:'27 April 2022',
        time:'14:23 pm'
    },
    {
        card_id:2,
        trans_id:4,
        trans_name:'Transfer to Viola',
        status:'credit',
        value:'124,00',
        date:'27 April 2022',
        time:'14:23 pm'
    },
    {
        card_id:3,
        trans_id:1,
        trans_name:'Transfer to Viola',
        status:'credit',
        value:'124,00',
        date:'27 April 2022',
        time:'12:00 pm'
    },
    {
        card_id:3,
        trans_id:2,
        trans_name:'AprilPayment',
        status:'payment',
        value:'900,00',
        date:'27 April 2022',
        time:'14:23 pm'
    },
    {
        card_id:3,
        trans_id:3,
        trans_name:'Transfer from Vicky',
        status:'Debit',
        value:'3,000,00',
        date:'27 April 2022',
        time:'14:23 pm'
    },
    {
        card_id:3,
        trans_id:4,
        trans_name:'Transfer to Viola',
        status:'credit',
        value:'124,00',
        date:'27 April 2022',
        time:'14:23 pm'
    },
    {
        card_id:4,
        trans_id:1,
        trans_name:'Transfer to Viola',
        status:'credit',
        value:'124,00',
        date:'27 April 2022',
        time:'12:00 pm'
    },
    {
        card_id:4,
        trans_id:2,
        trans_name:'AprilPayment',
        status:'payment',
        value:'900,00',
        date:'27 April 2022',
        time:'14:23 pm'
    },
    {
        card_id:4,
        trans_id:3,
        trans_name:'Transfer from Vicky',
        status:'Debit',
        value:'3,000,00',
        date:'27 April 2022',
        time:'14:23 pm'
    },
    {
        card_id:4,
        trans_id:4,
        trans_name:'Transfer to Viola',
        status:'credit',
        value:'124,00',
        date:'27 April 2022',
        time:'14:23 pm'
    }

]