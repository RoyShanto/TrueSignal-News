import Marquee from 'react-fast-marquee';
import { Link } from 'react-router';

const BreakingNewsTicker = () => {
    return (
        <div className='flex items-center bg-base-300 p-3'>
            <p className='bg-red-600 py-2 px-3 text-white font-semibold'>Latest</p>
            <Marquee pauseOnHover='false' className='mx-2'>
                <li><Link className='mr-5' to={'category/04/news/e342b6c0c8efc8ca9e811991dc8a7900'}>Shaquille O’Neal auctions a 1000 size 22 Reeboks for $999.32 each!</Link></li>
                <li><Link className='mr-5' to={'category/01/news/30af81e91ab3eafc0bcae0de62f55d5c'}>U.S. announces largest weapons package for Ukraine</Link></li>
                <li><Link className='mr-5' to={'category/05/news/f06f8cc035b04bd1158e4198281915a3'}>9 Things to do in Colorado this Labor Day weekend</Link></li>
                <li><Link className='mr-5' to={'category/01/news/919db97c34e0778b387dd40cdfa08130'}>U.S. concerned about India's participation in Russia military exercises</Link></li>
            </Marquee>
        </div>
    );
};

export default BreakingNewsTicker;