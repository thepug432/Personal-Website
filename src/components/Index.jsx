import { motion } from 'framer-motion'
import Hider from "./Hider"
import Image from './index/image'
import Examples from './index/Example'
import A from './index/A'

export default function Idex() {
  return (
    <div className='back index h-screen-without-nav'>
      <Hider>
        <div className="flex flex-col">
          {/* main content */}
          <div className='flex xsm:flex-col mt-10 xsm:mt-5 xsm:mx-3 text-white'>
            <div className='my-auto mx-16 bg-red-700 p-16 rounded-full'>
              <p className="text-4xl">Hi, I'm Kiril Bourakov.</p> <br/>
              <p className="text-xl">I design modern, responsive websites using React and other technologies.</p>
            </div>
            <Image/> 
          </div>
          {/* links */}
          <div className='flex ml-32 xsm:mt-10'>
            <A to={'https://github.com/thepug432/'} title={'Github'}/>
            <Examples to={'projects'} title={'Projects'}/>
          </div>
        </div>
      </Hider>
    </div>
    )
  }