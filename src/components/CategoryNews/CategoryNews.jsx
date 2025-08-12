import React from 'react';
import { useLoaderData } from 'react-router';
import NewsCard from '../NewsCard/NewsCard';

const CategoryNews = () => {
    let news = useLoaderData();
    // console.log('data', news.data)
    const allNews = news.data;
    console.log('res', allNews)
    return (
        <div>
            <h3 className='font-semibold text-2xl py-5'>TrueSignal News Home</h3>
            {
                allNews.length ?
                    allNews.map(news => <NewsCard key={news._id} news={news} />)
                    : <h1 className='text-center text-4xl font-semibold text-red-500 mt-28 mask-t-from-30%'>No Data Found</h1>
            }
        </div>
    );
};

export default CategoryNews;