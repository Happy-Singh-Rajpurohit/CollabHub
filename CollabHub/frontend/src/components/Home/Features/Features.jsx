import react from 'react'
import './Features.css'
import { Link } from 'react-router-dom';
import { Users, Calendar, Star} from 'lucide-react';
export default function Features(){
    const features = [
        {
            icon: <Users size={24} />,
            title: "Find Your Perfect Match",
            description: "Use advanced filters to find teammates with the skills and interests you need.",
            location: "/findmember"
        },
        {
            icon: <Calendar size={24} />,
            title: "Explore Top Events",
            description: "Browse a curated list of hackathons, competitions, and college events.",
            location: "/event"
        },
        {
            icon: <Star size={24} />,
            title: "Showcase Your Skills",
            description: "Build a comprehensive profile to highlight your projects, skills, and experience.",
            location: "/profile"
        }
    ];

    return (
        <>
            <section className="features-intro">
                <h2>Everything you need to build your dream team</h2>
                <p>Our platform is designed to help you connect with the right people for your next big project.</p>
            </section>

            <section className="features">
                {features.map((feature, index) => (
                    <Link to={feature.location} style={{ textDecoration: 'none' }} key={feature.title}>
                    <div className="feature-card" key={index}>
                        <div className="feature-icon">
                            {feature.icon}
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                </Link>
                ))}
            </section>
        </>
    );
};