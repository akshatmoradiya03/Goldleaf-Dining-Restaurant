import React from 'react';
import Hero from '../components/Hero';
import FeaturedMenu from '../components/FeaturedMenu';
import DishesMarquee from '../components/DishesMarquee';
import AboutSection from '../components/AboutSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <DishesMarquee />
            <FeaturedMenu />
            <AboutSection />
        </div>
    );
};

export default Home;
