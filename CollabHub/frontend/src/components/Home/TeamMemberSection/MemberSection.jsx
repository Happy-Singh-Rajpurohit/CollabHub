// src/components/ProfileSection/ProfileSection.jsx
import React,{useMemo} from 'react';
import MemberCard from './MemberCard';
import '../TeamSection/TeamSection.css'; // Re-using team grid styles
import './MemberSection.css';

// Mock data
const profiles = [
    { id: 1, name: 'Alex Johnson', skills: ['React', 'Node.js', 'MongoDB'] },
    { id: 2, name: 'Maria Garcia', skills: ['Figma', 'UX Research', 'Prototyping'] },
    { id: 3, name: 'Sam Chen', skills: ['Python', 'SciKit-Learn', 'Pandas'] },
    { id: 4, name: 'Priya Patel', skills: ['Java', 'Spring Boot', 'MySQL'] },
    { id: 5, name: 'Kenji Watanabe', skills: ['Flutter', 'Firebase', 'UI/UX'] },
    { id: 6, name: 'Emily Rose', skills: ['DevOps', 'AWS', 'Terraform'] },
];
const cardBackgrounds = [
    'linear-gradient(135deg, #9be6c1, #4cb58a)',  // mint green → deep teal green
    'linear-gradient(135deg, #ffdd80, #ffb347)',  // soft yellow → warm orange
    'linear-gradient(135deg, #fec192, #f97b5b)',  // peach → coral
    'linear-gradient(135deg, #c8bbff, #7a6efb)',  // lavender → royal violet
    'linear-gradient(135deg, #9bc9ff, #3a8dff)',
];
const ProfileSection = () => {
    const MemberWithColors = useMemo(() => {
            return profiles.map((profile) => {
                const randomBg =
                    cardBackgrounds[Math.floor(Math.random() * cardBackgrounds.length)];
                return {
                    ...profile,
                    bgColor: randomBg,
                };
            });
        }, []); 
    return (
        <section className="section-container container">
            <h2>Members Looking for Teams</h2>
            {/* Re-using the .team-grid class for layout */}
            <div className="team-grid">
                {MemberWithColors.map((profile) => (
                    <MemberCard key={profile.id} profile={profile} />
                ))}
            </div>
        </section>
    );
};

export default ProfileSection;