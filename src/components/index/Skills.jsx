import Header from "./Header"
import GridItem from "./GridItem"
import {FaTools} from 'react-icons/fa'

export default function Skills() {
    const skills = ['Git', 'Python', 'JavaScript', 'C', 'HTML & CSS', 'OOP']
    return(
        <div className='basis-1/2'>
            <Header text={'Tools & skills'} />
              <div className='flex justify-center mb-5'>
                <FaTools size={100} />
              </div>
              <div className='flex justify-center'>
                <div className='grid grid-rows-2 grid-flow-col gap-4'>
                  {skills.map(item => 
                    <GridItem text={item} key={item}/>
                  )}
                </div>
            </div>
        </div>
    )
}