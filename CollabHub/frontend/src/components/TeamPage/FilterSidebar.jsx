import React from 'react';
import './FilterSidebar.css';


const ROLES = ['Frontend Dev', 'Backend Dev', 'UI/UX Designer', 'Product Manager', 'Data Scientist'];


export default function FilterSidebar({ onToggleRole, filters, setFilters }) {
    function toggleEventType(type) {
        setFilters(prev => ({ ...prev, eventType: type }));
    }
    function toggleCulture(c) {
        setFilters(prev => {
            const culture = prev.culture.includes(c) ? prev.culture.filter(x => x !== c) : [...prev.culture, c];
            return { ...prev, culture }
        })
    }


    return (
        <aside className="filter">
            <h4>Filter By</h4>
            <div className="filter-block">
                <div className="filter-section">
                    <div className="section-title">Event Type</div>
                    <label className="radio"><input type="radio" name="evt" checked={filters.eventType === 'All'} onChange={() => toggleEventType('All')} /> <span>All</span></label>
                    <label className="radio"><input type="radio" name="evt" checked={filters.eventType === 'Hackathon'} onChange={() => toggleEventType('Hackathon')} /> <span>Hackathon</span></label>
                    <label className="radio"><input type="radio" name="evt" checked={filters.eventType === 'Case Competition'} onChange={() => toggleEventType('Case Competition')} /> <span>Case Competition</span></label>
                    <label className="radio"><input type="radio" name="evt" checked={filters.eventType === 'Project'} onChange={() => toggleEventType('Project')} /> <span>Project</span></label>
                </div>


                <div className="filter-section">
                    <div className="section-title">Required Roles</div>
                    {ROLES.map(r => (
                        <label key={r} className="check">
                            <input type="checkbox" onChange={() => onToggleRole(r)} checked={filters.roles.includes(r)} />
                            <span>{r}</span>
                        </label>
                    ))}
                </div>


                {/* <div className="filter-section">
                    <div className="section-title">Team Culture</div>
                    <label className="check"><input type="checkbox" onChange={() => toggleCulture('Competitive')} checked={filters.culture.includes('Competitive')} /> <span>Competitive</span></label>
                    <label className="check"><input type="checkbox" onChange={() => toggleCulture('Casual')} checked={filters.culture.includes('Casual')} /> <span>Casual</span></label>
                    <label className="check"><input type="checkbox" onChange={() => toggleCulture('Beginner-Friendly')} checked={filters.culture.includes('Beginner-Friendly')} /> <span>Beginner-Friendly</span></label>
                </div> */}

            </div>
        </aside>
    )
}