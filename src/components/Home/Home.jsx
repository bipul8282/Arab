import React from 'react';
import SideNavbar from '../sideNavbar/SideNavbar';
import Cards from '../Cards/Cards';
import Card from "../Cards/Card";
import "./Home.css"

const Home = () => {
    return (
       
        
        <div className='home-content'>
            
            <div className='side-content'>
                
            <SideNavbar />
            </div>
         
            <div className='card-content'>
            <Cards />
            
            </div>
           <div className='btn2'> <Card/></div>
        </div>
       
    );
}

export default Home;
