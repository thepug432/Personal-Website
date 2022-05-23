import { motion } from 'framer-motion'
import Hider from "./Hider"
import Image from './index/image'
import Examples from './index/Example'

export default function Idex() {
  return (
    <Hider>
      <div className='flex flex-col'>
        {/* main content */}
        <div className='flex xsm:flex-col mt-20 xsm:mt-5 xsm:mx-3 text-white'>
          <div className='my-auto mx-16'>
            <p className="text-4xl">Hi, I'm Kiril Bourakov.</p> <br/>
            <p className="text-xl">I design modern, responsive websites using React and other technolagies.</p>
          </div>
          <Image/> 
        </div>
        {/* links */}
        <div className='flex ml-16'>
          <Examples to={'github'} title={'Github'}/>
          <Examples to={'projects'} title={'Projects'}/>
        </div>
      </div>
    </Hider>
    )
  }