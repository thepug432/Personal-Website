import {MdScreenSearchDesktop} from 'react-icons/md'
import Header from "./Header"
import GridItem from './GridItem'

export default function Frontend() {
    const frontend = ['CSS', 'HTML', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'React', 'Framer-Motion', 'React Icons', 'Responsive Design']
    return(
        <div className='basis-1/2 mb-3'>
            <Header text={'Frontend'} />
            <div className='flex justify-center mb-5'>
                <MdScreenSearchDesktop size={100}/>
            </div>
            <div className='flex justify-center'>
            <div className='grid grid-rows-3 grid-flow-col gap-4'>
                {frontend.map(item => 
                <GridItem text={item} key={item}/>
                )}
            </div>
            </div>
        </div>
    )
}