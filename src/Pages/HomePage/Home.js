import React from 'react';
import Banner from './Banner';
import Departments from './Departments';
// import Testmonial from './Testmonial';
import Featurs from './Featurs';
import LatestNews from './LatestNews';
import OurPatners from './OurPatners';
import Footer from '../Shared/Footer';
import ReviewContent from './ReviewContent';

const Home = () => {
    return (
        <div>

            <Banner />
            <Featurs />
            <Departments />
            <OurPatners />
            <LatestNews />
            <ReviewContent />
            {/* <Testmonial /> */}
            <Footer />
        </div>
    );
};

export default Home;