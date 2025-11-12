import React, { useState } from "react";
import "./Tabs.css";
import TeamItem from "./TeamItem";
import './SocialLinks.css'

export default function Tabs({ user, teams = [], links = [] }) {
    const [tab, setTab] = useState("details");

    return (
        <div className="tabs-panel">
            <div className="tabs-nav">
                <button className={tab === "details" ? "active" : ""} onClick={() => setTab("details")}>Details</button>
                <button className={tab === "teams" ? "active" : ""} onClick={() => setTab("teams")}>Teams</button>
            </div>

            <div className="tabs-content">
                {tab === "details" && (
                    <div className="details">
                        <section className="section">
                            <h4>Skills</h4>
                            <div className="chips">
                                {user.skills.map((s) => <span key={s} className="chip primary-chip">{s}</span>)}
                            </div>
                        </section>

                        <section className="section">
                            <h4>Social Links</h4>
                            <div className="social-panel">
                                {links.map((l) => (
                                    <a className="social-row" key={l.id} href={l.href} target="_blank" rel="noreferrer">
                                        <div className="icon-box">🔗</div>
                                        <div className="social-text">{l.label}</div>
                                        <div className="open-icon">↗</div>
                                    </a>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {tab === "teams" && (
                    <div className="teams">
                        {teams.length === 0 ? <div className="empty">Not a member of any teams yet.</div> :
                            teams.map((t) => <TeamItem key={t.id} team={t} />)}
                    </div>
                )}

                {tab === "events" && (
                    <div className="events">
                        {events.length === 0 ? <div className="empty">No events found.</div> :
                            events.map((e) => <EventItem key={e.id} event={e} />)}
                    </div>
                )}
            </div>
        </div>
    );
}
