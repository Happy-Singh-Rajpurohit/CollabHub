import React from 'react';
import './TeamCard.css';


export default function TeamCard({ team }) {
    return (
        <div className="team-card">
            <div className="card-top">
                <div className="card-image">{team.image ? <img src={team.image} alt="cover" /> : (<div className="placeholder">{team.event.split(' ')[0]}</div>)}</div>
            </div>
            <div className="card-body">
                <div className="event">{team.event}</div>
                <div className="title">{team.title}</div>
                <div className="meta">
                    <div className="meta-block">
                        <div className="meta-title">Seeking Roles</div>
                        <div className="chips">
                            {(team.seeking || []).map((s, i) => (<span key={i} className="chip">{s}</span>))}
                        </div>
                    </div>


                    {team.tech && (
                        <div className="meta-block">
                            <div className="meta-title">Tech Stack</div>
                            <div className="chips">{team.tech.map((t, i) => (<span key={i} className="chip">{t}</span>))}</div>
                        </div>
                    )}


                    {team.tools && (
                        <div className="meta-block">
                            <div className="meta-title">Tools</div>
                            <div className="chips">{team.tools.map((t, i) => (<span key={i} className="chip">{t}</span>))}</div>
                        </div>
                    )}


                </div>


                <div className="card-footer">
                    <div className="members">👥 {team.members}/{team.capacity} members</div>
                    <button className="btn">View Team →</button>
                </div>
            </div >
        </div >
    )
}