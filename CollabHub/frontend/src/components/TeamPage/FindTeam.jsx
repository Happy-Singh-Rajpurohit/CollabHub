import React, { useMemo, useState } from 'react';
import './FindTeam.css';
import FilterSidebar from './FilterSidebar';
import TeamCard from './TeamCard';
import Pagination from './Pagination';
const DUMMY_TEAMS = [
    {
        id: 1,
        title: 'Code Wizards',
        event: 'Hack The North 2024',
        seeking: ['Frontend Dev', 'UI/UX Designer'],
        tech: ['React', 'Figma', 'Node.js'],
        members: 3,
        capacity: 5,
        image: null
    },
    {
        id: 2,
        title: 'AI Innovators',
        event: 'TechCrunch Disrupt 2024',
        seeking: ['Backend Dev', 'Data Scientist'],
        tech: ['Python', 'TensorFlow', 'AWS'],
        members: 2,
        capacity: 4,
        image: null
    },
    {
        id: 3,
        title: 'Market Mavericks',
        event: 'McKinsey Case Competition',
        seeking: ['Business Analyst', 'Marketing Lead'],
        tools: ['PowerPoint', 'Excel'],
        members: 4,
        capacity: 5,
        image: null
    },
    {
        id: 4,
        title: 'CampusConnect',
        event: 'Y Combinator Build Sprint',
        seeking: ['Full-Stack Dev', 'Product Manager'],
        tech: ['Next.js', 'Firebase', 'TailwindCSS'],
        members: 1,
        capacity: 3,
        image: null
    },
    // add more to demonstrate pagination
    ...Array.from({ length: 8 }).map((_, i) => ({
        id: 5 + i,
        title: `Demo Team ${i + 1}`,
        event: 'Community Project',
        seeking: ['Frontend Dev'],
        tech: ['HTML', 'CSS', 'JS'],
        members: Math.floor(Math.random() * 4) + 1,
        capacity: 4,
        image: null
    }))
];
export default function FindTeam() {
    const [teams] = useState(DUMMY_TEAMS);
    const [query, setQuery] = useState('');
    const [filters, setFilters] = useState({
        eventType: 'All',
        roles: [],
        culture: []
    });
    const [sortBy, setSortBy] = useState('Newest');
    const [page, setPage] = useState(1);
    const perPage = 6;
    const filtered = useMemo(() => {
        let list = teams.slice();
        if (query.trim()) {
            const q = query.toLowerCase();
            list = list.filter(t =>
                t.title.toLowerCase().includes(q) ||
                (t.event && t.event.toLowerCase().includes(q)) ||
                (t.tech && t.tech.join(' ').toLowerCase().includes(q))
            );
        }
        // roles filter (if any)
        if (filters.roles.length) {
            list = list.filter(t => filters.roles.every(r => (t.seeking || []).includes(r)));
        }
        // sort
        if (sortBy === 'Newest') {
            list = list.reverse();
        }
        return list;
    }, [teams, query, filters, sortBy]);


    const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
    const visible = filtered.slice((page - 1) * perPage, page * perPage);


    function handleToggleRole(role) {
        setFilters(prev => {
            const roles = prev.roles.includes(role) ? prev.roles.filter(r => r !== role) : [...prev.roles, role];
            return { ...prev, roles };
        })
        setPage(1);
    }


    return (
        <div className="page-wrap">
            <div className="layout">
                <div className="find-header">
                    <h1>Find Your Team</h1>
                    <div className="actions">
                        <div className="search-wrap">
                            <input value={query} onChange={e => { setQuery(e.target.value); setPage(1); }} placeholder="Search by event, role, or tech stack..." />
                        </div>
                        <div className="sort">
                            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                                <option>Newest</option>
                                <option>Oldest</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div className="main-grid">
                    <FilterSidebar onToggleRole={handleToggleRole} filters={filters} setFilters={setFilters} />


                    <div className="cards-area">
                        <div className="cards-grid">
                            {visible.map(team => (
                                <TeamCard key={team.id} team={team} />
                            ))}
                        </div>


                        <Pagination page={page} setPage={setPage} total={totalPages} />
                    </div>
                </div>
            </div>
        </div>
    )
}