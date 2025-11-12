// src/components/ProfileSection/ProfileCard.jsx
import React from 'react';
import '../TeamSection/TeamSection.css'; // Re-using card/skill styles
import './MemberSection.css';

const ProfileCard = ({ profile }) => {
    return (
        // Re-using .team-card for base styling
        <div className="team-card profile-card" style={{ background: profile.bgColor }}>
            <div className="team-card-inner">

                <div className="profile-header">
                    <img
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${profile.name}`}
                        alt={profile.name}
                        className="profile-avatar"
                    />
                    <h3>{profile.name}</h3>
                </div>
                <p>My Skills:</p>
                <div className="skills-container">
                    {profile.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                            {skill}
                        </span>
                    ))}
                </div>
                <button className="join-btn invite-btn">Invite to Team</button>
            </div>
        </div>
    );
};

export default ProfileCard;
