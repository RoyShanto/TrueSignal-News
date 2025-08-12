import React from 'react';
import Header from '../components/Header/Header';
import BreakingNewsTicker from '../components/BreakingNewsTicker/BreakingNewsTicker';
import Navbar from '../components/Navbar/Navbar';
import SidebarLeft from '../components/SidebarLeft/SidebarLeft';
import SidebarRight from '../components/SidebarRight/SidebarRight';

const MainLayout = () => {
    return (
        <div className='mx-auto'>
            <header>
                <Header />
                <BreakingNewsTicker />
                <Navbar />
            </header>
            <main className='grid grid-cols-12 gap-5'>
                <aside className='col-span-3'>
                    <SidebarLeft/>
                </aside>
                <div className='col-span-6'>
                    <h3 className='font-semibold text-2xl'>TrueSignal News Home</h3>
                </div>
                <aside className='col-span-3'>
                    <SidebarRight/>
                </aside>
            </main>

        </div>
    );
};

export default MainLayout;