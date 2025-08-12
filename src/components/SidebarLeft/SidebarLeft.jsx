import React from 'react';
import CategoryList from './CategoryList';
import SmallNewsCard from './SmallNewsCard';

const SidebarLeft = () => {

    return (
        <div>
            <CategoryList/>
            <SmallNewsCard/>
        </div>
    );
};

export default SidebarLeft;