import React from 'react';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import HowItWorks from './HowItWorks/HowItWorks';
import Testimonials from './Testimonials/Testimonials';

const TeamUpLanding = () => {
    return (
        <div className="app" style={{ background: '#0a1628', color: 'white' }}>
            <Hero />
            <HowItWorks />
            <Features />
            <Testimonials />
        </div>
    );
};

export default TeamUpLanding;
