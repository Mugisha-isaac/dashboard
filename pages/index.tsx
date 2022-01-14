import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-primary m-3 rounded-2xl ' style={{width:'800px', height:'500px'}}>
     <div>
       <div className='bg-red-400 w-12 h-40 relative top-7 left-3 rounded-sm'>
         icons
       </div>
       <span className='text-white text-lg absolute top-7 left-10 px-10'>cards analytics</span>
     </div>
    </div>
  )
}
