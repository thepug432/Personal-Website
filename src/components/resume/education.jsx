import { useState } from 'react'
import HR from './hr'
import HoverEffect from './HoverEffect'

export default function Education({url, title, institution, discription, grade, date, image, titleaddon}) {
    const [hover, sethover] = useState(false)

    return(
        <div className='relative'>
            <div 
            onMouseEnter={() => sethover(true)}
            onMouseLeave={() => sethover(false)}
            className="flex flex-col text-white border-b border-white border-solid">

                {/* title */}
                <h1 className="text-3xl mx-auto xsm:text-center"><strong>{title}</strong> {titleaddon}</h1>

                {/* side */}
                <div className='flex'>
                <div className="pl-2 self-center">
                    <h2 className="text-xl mx-auto xsm:text-center">{institution}</h2>
                    {grade &&
                        <div className="self-center ml-auto mr-10 xsm:mx-auto">
                            <p className='xsm:text-center'><strong>{grade} {date}</strong></p>
                        </div>
                    }
                </div>
                <HR/>

                {/* body */}
                <div className="self-center xsm:self-center mx-auto p-5">
                    <p className="xsm:text-center max-w-lg">{discription}</p>
                </div>
                <HR/>
                <div className="p-2 my-auto self-center xsm:hidden">
                    <img src={image} className='object-scale-down h-48 w-96'></img>
                </div>
                <HoverEffect hover={hover} url={url}/>
                </div>
            </div>
        </div>
    )
}