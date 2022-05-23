import { motion } from 'framer-motion'
import me from '../static/images/me.png'
import Hider from "./Hider"

export default function Idex() {
  
return (
  <Hider>
    <div className='flex flex-col'>
      {/* main content */}
      <div className='flex xsm:flex-col mx-auto mt-20 xsm:mt-5 xsm:mx-3 text-white'>
        <div className='my-auto'>
          <p className="text-4xl">Hi, I'm Kiril Bourakov.</p> <br/>
          <p className="text-xl">I design modern, responsive websites using React and other technolagies.</p>
        </div> 
        <div className='relative'>
          <div className='overflow-hidden rounded-full self-center'>
            <img src={me} />
          </div>
          <div className='absolute right-0 bottom-0 cursor-default'>
            <p>Source: vecteezy.com</p>
          </div>
        </div>
      </div>
      {/* links */}
    </div>
  </Hider>
  )
}