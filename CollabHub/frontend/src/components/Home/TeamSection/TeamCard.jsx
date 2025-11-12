import React from 'react';
import './TeamSection.css';

const TeamCard = ({ team }) => {
    return (
        <div className="team-card" style={{ background: team.bgColor }}>
            <div className="team-card-inner">
                <h3>{team.name}</h3>
                <h4>Event: {team.event}</h4>
                <h4 className="team-event-date">Date: {team.date}</h4>
                <p className="team-desc">{team.desc}</p>
                <p>Skills Needed:</p>
                <div className="skills-container">
                    {team.needed.map((skill, index) => (
                        <span key={index} className="skill-tag">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamCard;

