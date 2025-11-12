import React, { useState } from "react";

import './MemberPage.css'
const FilterBar = ({ onFilter }) => {
    const [search, setSearch] = useState("");
    const [skill, setSkill] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
        onFilter(e.target.value, skill);
    };

    const handleSkillChange = (e) => {
        setSkill(e.target.value);
        onFilter(search, e.target.value);
    };

    return (
        <div className="filter-bar">
            <input
                type="text"
                placeholder="Search by name..."
                className="filter-input"
                value={search}
                onChange={handleSearch}
            />
            <select className="filter-select" value={skill} onChange={handleSkillChange}>
                <option value="">All Skills</option>
                <option value="React">React</option>
                <option value="Node.js">Node.js</option>
                <option value="MongoDB">MongoDB</option>
                <option value="Python">Python</option>
                <option value="C++">C++</option>
            </select>
        </div>
    );
};

export default FilterBar;
