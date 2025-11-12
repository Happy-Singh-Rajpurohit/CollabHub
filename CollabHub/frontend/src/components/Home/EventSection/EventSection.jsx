import React from 'react';
import EventCard from './EventCard';
import '../TeamSection/TeamSection.css';
import './EventSection.css';

const events = [
    {
        id: 1,
        name: 'InnovateAI Hack 2025',
        date: 'Dec 15-16, 2025',
        venue: 'Online',
        desc: 'The biggest AI hackathon of the year.',
        img: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
        id: 2,
        name: 'Web3 Wave Summit',
        date: 'Jan 10, 2026',
        venue: 'Miami, FL',
        desc: 'Build the decentralized future.',
        img: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
        id: 3,
        name: 'EcoHack: Green Tech',
        date: 'Feb 5-6, 2026',
        venue: 'Virtual',
        desc: 'Code solutions for sustainability.',
        img: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
        id: 4,
        name: 'CyberSecurity CTF',
        date: 'Mar 1, 2026',
        venue: 'New York, NY',
        desc: 'Capture the flag and test your skills.',
        img: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
];

const EventSection = () => {
    return (
        <section className="section-container container">
            <h2>Events & Hackathons</h2>
            <div className="team-grid">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </section>
    );
};

export default EventSection;