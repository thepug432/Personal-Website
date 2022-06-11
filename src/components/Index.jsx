import {BsFillHddStackFill} from 'react-icons/bs'
import {MdScreenSearchDesktop} from 'react-icons/md'
import {GoServer} from 'react-icons/go'
import Hider from "./Hider"
import Image from './index/image'
import Examples from './index/Example'
import A from './index/A'
import Header from './index/Header'
import GridItem from './index/GridItem'

export default function Idex() {
  const frontend = ['CSS', 'HTML', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'React', 'Framer-Motion', 'React Icons', 'Responsive Design']
  const backend = ['Django', 'Django REST', 'SQL', 'Handling Authentication']

  return (
    <Hider>
      <div className='bg-gray-800 flex flex-col text-white pb-5 min-h-screen'>
        <h1 className="text-4xl mx-auto mt-5">Hello! I'm Kiril Bourakov</h1>

        {/* divder */}
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

        <div className='flex mt-10 mx-20 flex-row xsm:flex-col'>

          <div className='basis-1/2 mb-3'>
            <Header text={'Frontend'} />
            <div className='flex justify-center mb-5'>
              <MdScreenSearchDesktop size={100}/>
            </div>
            <div className='flex justify-center'>
              <div className='grid grid-rows-3 grid-flow-col gap-4'>
                {frontend.map(item => 
                  <GridItem text={item} />
                )}
              </div>
            </div>
          </div>

          <div className='basis-1/2'>
            <Header text={'Backend'} />
            <div className='flex justify-center mb-5'>
              <GoServer size={100} />
            </div>
            <div className='flex justify-center'>
              <div className='grid grid-rows-2 grid-flow-col gap-4'>
                {backend.map(item => 
                  <GridItem text={item} />
                )}
              </div>
            </div>
          </div>

              
        </div>
        
        {/* <div className="flex flex-col">
          {/* main content 
          <div className='flex xsm:flex-col mt-10 xsm:mt-5 xsm:mx-3 text-white'>
            <div className='my-auto mx-16 bg-gray-900 p-16 rounded-full'>
              <p className="text-4xl">Hi, I'm Kiril Bourakov.</p> <br/>
              <p className="text-xl">I design modern, responsive websites using React and other technologies.</p>
            </div>
            <Image/> 
          </div>
          {/* links 
          <div className='flex ml-32 xsm:mt-10'> 
            <A to={'https://github.com/thepug432/'} title={'Github'}/>
            <A to={'https://docs.google.com/document/d/1cXHeyqrwwt5AOQMvzQOM5SWOsbVwC8WhoBldJNNg55Q/edit?usp=sharing'} title={'Resume'}/>
            <Examples to={'projects'} title={'Projects'}/>
          </div>
        </div> */}
      </div>
    </Hider>
    )
  }