import Marquee from 'react-fast-marquee';

const BreakingNewsTicker = () => {
    return (
        <div className='flex items-center bg-base-300 p-3'>
            <p className='bg-red-600 py-2 px-3 text-white font-semibold'>Latest</p>
            <Marquee pauseOnHover='false' className='mx-2'>
                <a href="/abc">I can be a React component, multiple React components, or just some text.</a>
                <a href="/xyz">I can be a React component, multiple React components, or just some text.</a>
            </Marquee>
        </div>
    );
};

export default BreakingNewsTicker;