import React from 'react';
import { useLoaderData } from 'react-router';
import NewsCard from '../NewsCard/NewsCard';

const CategoryNews = () => {
    let news = useLoaderData();
    // console.log('data', news.data)
    const allNews = news.data;
    return (
        <div>
            <h3 className='font-semibold text-2xl py-5'>TrueSignal News Home</h3>
            <h1>news {news.data.length} </h1>
            {
                allNews.map(news => <NewsCard key={news._id} news={news} />)
            }
        </div>
    );
};

export default CategoryNews;