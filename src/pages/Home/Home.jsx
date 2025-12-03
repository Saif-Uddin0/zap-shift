import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaUserCircle } from 'react-icons/fa';
import Banner from '../../Shared/Home/Banner';
import HowItWorks from '../../Shared/Home/HowItWorks';
import OurService from '../../Shared/Home/OurService';
import SalesTeam from '../../Shared/Home/SalesTeam';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <HowItWorks></HowItWorks>
            </div>
            <div>
                <OurService></OurService>
            </div>
            <div>
                <SalesTeam></SalesTeam>
            </div>
        </div>
    );
};

export default Home;