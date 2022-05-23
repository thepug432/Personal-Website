import me from '../../static/images/me.png'

export default function Image() {
    return(
        <div className='relative mx-auto'>
            <div className='overflow-hidden rounded-full self-center'>
              <img src={me} />
            </div>
            <div className='absolute right-0 bottom-0 cursor-default'>
              <p>Source: vecteezy.com</p>
            </div>
        </div>
    )
}