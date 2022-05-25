import '../styles/globals.css'
import Home from './index'

function MyApp({ Component, pageProps }) {
  return(
 <div className=''>
   <Component {...pageProps} />
 </div>   
)
}

export default MyApp
