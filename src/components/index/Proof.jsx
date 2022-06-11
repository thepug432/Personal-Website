import Example from "./Example"
import A from './A'

export default function Proof() {
    return(
        <div className='basis-1/2'>
            <Header text={"Don't believe me?"} />
            <div className='flex justify-center mb-5'>
                <FaQuestion size={100} />
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-rows-1 grid-flow-col gap-4'>
                  <Examples to={'projects'} title={'See my projects'}/>
                  <A to={'https://github.com/thepug432/'} title={'Visit my Github'}/>
                  <A to={'https://docs.google.com/document/d/1cXHeyqrwwt5AOQMvzQOM5SWOsbVwC8WhoBldJNNg55Q/edit?usp=sharing'} title={'See my resume'}/>
                </div>
            </div>
        </div>
    )
}