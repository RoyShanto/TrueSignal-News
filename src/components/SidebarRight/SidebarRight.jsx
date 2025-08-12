import React from 'react';
import LoginWidget from './LoginWidget';
import SocialLinks from './SocialLinks';
import QZone from './QZone';
import AdBanner from './AdBanner';

const SidebarRight = () => {
    return (
        <div className='flex flex-col gap-5'>
            <LoginWidget />
            <SocialLinks />
            <QZone />
            <AdBanner />
        </div>
    );
};

export default SidebarRight;