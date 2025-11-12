import React from 'react';
import './EventCard.css'; 
import { Users} from 'lucide-react';

export default function EventCard({ event }) {
    return (
        <article className="card">
            <div
                className="card-image"
                style={{ backgroundImage: `url(${event.img})` }}
                aria-hidden
            />
            <div className="card-body">
                <h3 className="card-title">{event.title}</h3>
                <div className="card-event-details">
                <p className="card-date"><b>{event.date}</b></p>
                <p className="card-cap"><Users/>Team Size: <b>{event.capMin}-{event.capMax} Members</b></p>
                </div>
                <p className="card-desc">{event.desc}</p>

                <div className="tag-row">
                    {event.tags.map((t, i) => (
                        <span key={i} className="tag">{t}</span>
                    ))}
                </div>

                <button className="card-cta">Find a Team</button>
            </div>
        </article>
    );
}
