import React from "react";
import "./TeamItem.css";

export default function TeamItem({ team }) {
    return (
        <div className="team-item">
            <div className="team-left">
                <div className="team-avatar">{team.name.charAt(0)}</div>
                <div>
                    <div className="team-name">{team.name}</div>
                    <div className="team-sub">{team.event}</div>
                </div>
            </div>
            <div className="team-right">
                <div className="team-members">👥 {team.members}/{team.capacity}</div>
            </div>
        </div>
    );
}
