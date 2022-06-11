import {BsFillHddStackFill} from 'react-icons/bs'
import Hider from './Hider'
import Frontend from './index/Frontend'
import Backend from './index/Backend'
import Skills from './index/Skills'
import Proof from './index/Proof'

export default function Idex() {

  return (
    <Hider>
      <div className='bg-gray-800 flex flex-col text-white pb-5 min-h-screen'>
        <h1 className="text-4xl mx-auto mt-5">Hello! I'm Kiril Bourakov.</h1>

        {/* divider */}
        <div className="flex justify-center">
          <hr className="w-1/12 my-auto"></hr>
          <div className='m-3'>
            <BsFillHddStackFill size={30}/>
          </div>
          <hr className="w-1/12 my-auto"></hr>
        </div>

        <p className='mx-auto text-center'>
          Dynamic and motivated full-stack Developer with deep knowledge in the web development field. <br /> 
          Skilled in frontend and backend, having built a number of apps for courses and independently, and growen a vast skill set in development tools and languages.
        </p>

        <div className='flex flex-col'>
          <div className='flex mt-10 mx-20 flex-row xsm:flex-col'>

            <Frontend/>
            
            {/* Backend */}
            <Backend />
          </div>
        
        <div className='flex mt-10 mx-20 flex-row xsm:flex-col'>
          
          {/* Skills */}
            <Skills/>

            {/* Dont belive me */}
            <Proof />

          </div>

        </div>
      </div>
    </Hider>
    )
  }