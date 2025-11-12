import React from 'react';
import './Filters.css';

export default function Filters() {
    return (
        <aside className="filters-panel">
            <h4>Filter By</h4>
            {/* Add filter controls (radio/checkbox) here */}
            <div className="filters-group">
                <label><input type="radio" name="evt" defaultChecked /> All</label>
                <label><input type="radio" name="evt" /> Hackathon</label>
                <label><input type="radio" name="evt" /> Case Competition</label>
            </div>
        </aside>
    );
}
