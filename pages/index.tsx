import Head from 'next/head'
import Image from 'next/image'
import {AiFillSignal,AiOutlinePieChart,AiTwotonePicture,AiTwotoneSetting,AiOutlinePoweroff} from 'react-icons/ai'
import CardsComponent from '../components/CardsComponent';
import Linechart from '../components/Linechart.js'

export default function Home() {
  return (
    <div className='bg-primary   m-3   rounded-2xl ' style={{width:'1000px', height:'700px'}}>
     <div className=''>
       <div className='w-12 h-40 relative top-7 left-3 rounded-sm text-white'>
         <AiFillSignal className="w-8 h-6" />
         <AiOutlinePieChart className='w-8 h-6 mt-8'/>
         <AiTwotonePicture className='w-8 h-6 mt-8'/>
         <AiTwotoneSetting className='w-8 h-6 mt-8' />
         <AiOutlinePoweroff className='w-8 h-6' style={{marginTop:'80px'}} />
       </div>
       <span className='text-white text-lg absolute top-7 left-10 px-10 capitalize'>cards analytics</span>
       <div className='absolute' style={{width:'650px',height:'200px',top:'80px', left:'80px'}}>
         <CardsComponent/>
       </div>
       {/* <div>
         <Linechart/>
       </div> */}
     </div>
    </div>
  )
}
