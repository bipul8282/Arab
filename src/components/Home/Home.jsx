import React from 'react';
import SideNavbar from '../sideNavbar/SideNavbar';
import Cards from '../Cards/Cards';

const Home = () => {
    return (
       
        
        <div className='home-content'>
            
            <div className='side-content'>
            <SideNavbar />
            </div>
            <div className='card-content'>
            <Cards />
            </div>
        </div>
       
    );
}

export default Home;
