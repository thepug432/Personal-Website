import me from '../../static/images/me.png'

export default function Image() {
    return(
        <div className='relative mx-auto xsm:hidden'>
            <div className='overflow-hidden rounded-full self-center bg-gray-900 border-solid p-5'>
              <img src={me} />
            </div>
            <div className='absolute right-28 bottom-10 cursor-default'>
              <p className='text-sm'>Source: vecteezy.com</p>
            </div>
        </div>
    )
}