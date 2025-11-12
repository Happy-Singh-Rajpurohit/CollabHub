import React from "react";
import { MessageSquare } from "lucide-react";

import './MemberPage.css'

const MemberCard = ({ member }) => {
    return (
        <div className="member-card">
            <div className="member-header">
                <img
                    src={member.avatar || "https://via.placeholder.com/100"}
                    alt={member.name}
                    className="member-avatar"
                />
                <div className="member-info">
                    <h3>{member.name}</h3>
                    <p>{member.role || "Aspiring Developer"}</p>
                </div>
            </div>
            <div className="member-skills">
                {member.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                        {skill}
                    </span>
                ))}
            </div>
            <button className="connect-btn">
                <MessageSquare size={16} />
                <span>Invite to Team</span>
            </button>
        </div>
    );
};

export default MemberCard;
