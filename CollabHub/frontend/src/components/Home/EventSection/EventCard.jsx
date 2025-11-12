import React from 'react';
import './EventSection.css';

const EventCard = ({ event }) => {
    return (
        <div className="event-card">
            <img src={event.img} alt={event.name} className="event-bg-image" />
            <h3 className="event-name">{event.name}</h3>

            <div className="event-overlay">
                <div className="event-details">
                    <p>
                        <strong>Date:</strong> {event.date}
                    </p>
                    <p>
                        <strong>Venue:</strong> {event.venue}
                    </p>
                    <p className="event-desc">{event.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default EventCard;