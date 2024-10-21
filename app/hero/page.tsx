
import {styles} from '@/styles.js'

interface pageProps {
  // Define props here

}

export default function Hero() {
    return (

      <div id='pin-windmill' className='h-96 bg-pink-200'  >
          <h1 className={`${styles.heroHeadText} text-secondary box2`}>
            Hi, I'm <span className='text-[#AEFD71] ' id='pin-windmill-svg'>Nina Tche </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-secondary`}>
            I develop React and <br  className='sm:block hidden'/> Three.js Web applications.
          </p>
        </div>
    
    )
  }

