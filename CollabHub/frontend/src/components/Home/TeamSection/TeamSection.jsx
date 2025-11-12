import React, { useMemo } from 'react';
import TeamCard from './TeamCard';
import './TeamSection.css';

// Mock data
const teams = [
    { id: 1, name: 'AI Avengers', needed: ['Python', 'TensorFlow', 'NLP'], event: 'XYZ', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro alias fuga reprehenderit.', date: '13-11-2025'},
    { id: 2, name: 'BlockBuilders', needed: ['Solidity', 'React', 'Node.js'], event: 'XYZ', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro alias fuga reprehenderit.', date: '13-11-2025' },
    { id: 3, name: 'UI/UX Wizards', needed: ['Figma', 'Webflow', 'CSS'], event: 'XYZ', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro alias fuga reprehenderit.', date: '13-11-2025' },
    { id: 4, name: 'Cloud Crew', needed: ['AWS', 'Docker', 'Kubernetes'], event: 'XYZ', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro alias fuga reprehenderit.', date: '13-11-2025' },
    { id: 5, name: 'Data Dynamos', needed: ['SQL', 'PowerBI', 'Tableau'], event: 'XYZ', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro alias fuga reprehenderit.', date: '13-11-2025' },
    { id: 6, name: 'Mobile Mavericks', needed: ['Flutter', 'Firebase', 'Dart'], event: 'XYZ', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro alias fuga reprehenderit.', date: '13-11-2025' },
    { id: 7, name: 'Web Warriors', needed: ['React', 'Next.js', 'PostgreSQL'], event: 'XYZ', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro alias fuga reprehenderit.', date: '13-11-2025' },
    { id: 8, name: 'Game Changers', needed: ['Unity', 'C#', 'Blender'], event: 'XYZ', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro alias fuga reprehenderit.', date: '13-11-2025' },
];
const cardBackgrounds = [
    'linear-gradient(135deg, #9be6c1, #4cb58a)',  // mint green → deep teal green
    'linear-gradient(135deg, #ffdd80, #ffb347)',  // soft yellow → warm orange
    'linear-gradient(135deg, #fec192, #f97b5b)',  // peach → coral
    'linear-gradient(135deg, #c8bbff, #7a6efb)',  // lavender → royal violet
    'linear-gradient(135deg, #9bc9ff, #3a8dff)',
];

const TeamSection = () => {
    const teamsWithColors = useMemo(() => {
        return teams.map((team) => {
            const randomBg =
                cardBackgrounds[Math.floor(Math.random() * cardBackgrounds.length)];
            return {
                ...team,
                bgColor: randomBg,
            };
        });
    }, []); 

    return (
        <section className="section-container container">
            <h2>Teams Looking for Members</h2>
            <div className="team-grid">
                {}
                {teamsWithColors.map((team) => (
                    <TeamCard key={team.id} team={team} />
                ))}
            </div>
        </section>
    );
};

export default TeamSection;

