import {GoServer} from 'react-icons/go'
import GridItem from './GridItem'
import Header from "./Header"
import FaQuestion from 'react-icons/fa'

export default function Backend() {
    const backend = ['Django', 'Django REST', 'DJ-all-auth', 'SQL', 'Working wth database', 'Server security']
    return(
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
    )
}