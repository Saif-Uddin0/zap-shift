import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaUserCircle } from 'react-icons/fa';
import Banner from '../../Shared/Home/Banner';
import HowItWorks from '../../Shared/Home/HowItWorks';
import OurService from '../../Shared/Home/OurService';
import SalesTeam from '../../Shared/Home/SalesTeam';
import FeatureSection from '../../Shared/Home/FeatureSection';
import PrioritySection from '../../Shared/Home/PioritySection';
import CustomerReview from '../../Shared/Home/CustomerReview';
import FAQ from '../../Shared/Home/FAQ';

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
            <div>
                <FeatureSection></FeatureSection>
            </div>
            <div>
                <PrioritySection></PrioritySection>
            </div>
            <div>
                <CustomerReview></CustomerReview>
            </div>
            <div>
                <FAQ></FAQ>
            </div>
        </div>
    );
};

export default Home;