import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const CategoryList = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])

    return (
        <div>
            <h3 className='font-semibold text-2xl py-5'>All Category</h3>
            <div className="flex flex-col gap-2">
                {
                    categories.length ?
                        categories.map(category =>
                            <NavLink to={`category/${category.category_id}`}
                                className={({ isActive }) => `btn bg-base-100 border-none text-gray-500 text-lg ${isActive ? 'bg-base-300' : ''}`}
                                key={category.category_id}>
                                {category.category_name}
                            </NavLink>)
                        : <span className="loading loading-bars loading-xl mx-auto mt-16"></span>
                }
            </div>
        </div>
    );
};

export default CategoryList;

// to={`category/${category.category_id}`}