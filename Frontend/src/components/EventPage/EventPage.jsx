import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import Pagination from './Pagination';
import axios from 'axios';
import './EventPage.css';

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    axios.get("http://localhost:5000/api/events")
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  const filtered = events.filter(e =>
    e.title.toLowerCase().includes(query.toLowerCase()) ||
    e.desc.toLowerCase().includes(query.toLowerCase()) ||
    e.tags.join(' ').toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const visible = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <main className="events-main">
      <div className="layout">
        <div className="page-head">
          <h1>Upcoming Events & Competitions</h1>
        </div>

        <div className="search-filters">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              placeholder="Search for hackathons, events..."
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
            />
          </div>
          <div className="filter-buttons">
            <button className="filter-btn">Event Type ▾</button>
            <button className="filter-btn">Tags ▾</button>
          </div>
        </div>

        <div className="events-grid">
          {visible.map(ev => (
            <EventCard key={ev._id} event={ev} />
          ))}
        </div>

        <Pagination page={page} setPage={setPage} total={totalPages} />
      </div>
    </main>
  );
}
