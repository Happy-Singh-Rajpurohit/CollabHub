import React, { useState, useMemo } from 'react';
import EventCard from './EventCard';
import Pagination from './Pagination';
import './EventPage.css';

/* Dummy data - use these image URLs from the HTML you provided */
const DUMMY_EVENTS = [
    {
        id: 1,
        title: 'InnovateAI Hackathon 2024',
        date: 'Oct 25-27, 2024',
        desc: 'A 48-hour virtual hackathon focused on building the next generation of AI-powered applications.',
        tags: ['AI', 'Virtual', 'Beginner-Friendly'],
        capMin: '4',
        capMax: '5',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQeipC17b5vIE8aEmwU5xHNkD7Y0kHerYXfSs4L4sGoo3vwkK5VgOvFvhx8h8OMEFnfyYSgQo89BbYXMAr6MNLhLdf33LEomdAg68jsDQtwXMru5QePLoLapzng_niGfthMW1JSrkEyJna3Cr-9UdMvppI3VBJjqMhQq5kLWEDeqGWsrH7Hw_Vpg8S7EUMbk3coeY7yGn1P6KTf6l9PQ3_Igq2wzaZCgNLYkObXgXV1KBSUk4fx7ozN_bJt7FeC7cS8Dv2sBHjaLs'
    },
    {
        id: 2,
        title: 'Global FinTech Case Competition',
        date: 'Nov 1-5, 2024',
        desc: 'Solve real-world FinTech challenges and present your solutions to industry leaders. Open to all majors.',
        tags: ['FinTech', 'Case Study', 'In-Person'],
        capMin: '4',
        capMax: '5',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3rDnj0hqAxyaBqJpS_NUMoQyaMarzP8vTgr77edCI0C13h6kzOxUbUUadcxGm2WF-1HncjQjqnoRXrW4wWYYXRwB521UACQblSLGjSVQ3xGsPG5uyIuRLjmAUnRruUYjWKTMl-3THJsLo1tNGUJoiifArZGXUMZeDCaSTzTfJ21JF3nu27PErIkqKeqARgpjGxRNzmg0GgyhlleCFJxkxgosJUYshcPzd0qRdXYjpEOlTTdv2XtIlu4UcgL7tHnIptbkMLFUQqvM'
    },
    {
        id: 3,
        title: 'Creative Jam: UI/UX Challenge',
        date: 'Nov 12, 2024',
        desc: 'A one-day design sprint to create innovative user interfaces. Perfect for aspiring designers and developers.',
        tags: ['UI/UX', 'Design', 'Virtual'],
        capMin: '4',
        capMax: '5',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPtI1Cl_G2k0AwXmRzX_XrguyGfcD8At6m4DUP66WbyVdiaAD5IgT7moRuq25mkDNtJEsdcS0Kt3FWuuxbrKqdxTYOb002Bp_nNK2zSTCZg-U6Ymim9U9fuzvJbj2vNVFJntKgsrB2MvJ6bS5G3JScw7T9GYOK9edPTtUql-wAgdWqZUEeuXJATPNVuY1oabVfIPsNuWXxeaPaPOsnWy3hiG0Lx2CoDejvD_rtz5AC3YO02rGI8qq-Fqn17SthHmP55WGrsUH3dwA'
    },
    {
        id: 4,
        title: 'Web3 Builders Summit',
        date: 'Nov 18-20, 2024',
        desc: 'Join the decentralized revolution. A hackathon for building dApps on the latest blockchain platforms.',
        tags: ['Web3', 'Blockchain', 'Advanced'],
        capMin: '4',
        capMax: '5',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEVoatYxcLHkmz55oEqfqxJBo-CcdT4zjCgJdRnaP8Yi6oTjgaj_mFEDTUGll3ozHkTmcD9oSStT2fCmd2cwrNtCdJuAsVWstrJ1OV3xJjvCftBXPLx2xASMFwcwV5fo-bo2Cw-M3IGBpswA4p3YI-dDz0vorN_ActG7pAqUUvzebXHyUETtUsbgxg5Ibu1_vLPB3MJ85aHfUSe0p9yILgwaUDDvXRQOzAgFz8XkQ6thGvNdHIbOZt8sURWVZ3WXrPX98NHagsSLk'
    },
    {
        id: 5,
        title: 'Code Green: Eco Hackathon',
        date: 'Dec 2-4, 2024',
        desc: 'Develop innovative solutions to combat climate change. Let’s code for a sustainable future.',
        tags: ['Sustainability', 'Social Good', 'Virtual'],
        capMin: '4',
        capMax: '5',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMdBINd3Cib4G3Vh-QEgkh2HW1ohZi47qno9QaEYkKn-0Yl0u3mEfW9AvWxx-oUXQ7JXfiE0oqMITpg5LO4LVWMbj7K2XnWILO2EOxkcjkfBn-_25SB2Txii3jnKLgj69lMHgLohAUll16q7hPrDa-_5EMzbWZIMq6VG9ozmGErJg52PvTyMmq1pr218HAqvfV_ZftZvflEKLrUqiMr2OGsbdcQq7JZfV0f6-hUqKZhEtqg71AZnMMISAW2iXY9W_ElAajD3ObzJc'
    },
    {
        id: 6,
        title: 'University Game Dev Fest',
        date: 'Dec 9-11, 2024',
        desc: 'Create the next indie hit in 48 hours. All platforms welcome - mobile, desktop, VR, and console.',
        tags: ['Gaming', 'VR/AR', 'In-Person'],
        capMin: '4',
        capMax: '5',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiRvUR5Fjieve_21MoD8bBqn8gMGcINAmM5J8OXWy5mGWVvold_bH_F3YloOzAEiG8UtNFEFd3tUMAd1QiTOHerw3BP6ci_Ru2z2MK1Zz9iG3iKjoG87Myl1BJeOK48kIe1kpOYBnEo_0VgM4iy28ESQbSUg6pL6gYVr651mKlRppgRHArlQe2qn5ORKAgRJOYi7q-L0ZJqdR5P9PgWHiDCbzMl1dBlngh3WDtnYzVlzHTSo6CTZRJ0kp_BGbTfLnHp1UAoTOCsTs'
    },
    {
        id: 7,
        title: 'University Game Dev Fest',
        date: 'Dec 9-11, 2024',
        desc: 'Create the next indie hit in 48 hours. All platforms welcome - mobile, desktop, VR, and console.',
        tags: ['Gaming', 'VR/AR', 'In-Person'],
        capMin: '4',
        capMax: '5',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiRvUR5Fjieve_21MoD8bBqn8gMGcINAmM5J8OXWy5mGWVvold_bH_F3YloOzAEiG8UtNFEFd3tUMAd1QiTOHerw3BP6ci_Ru2z2MK1Zz9iG3iKjoG87Myl1BJeOK48kIe1kpOYBnEo_0VgM4iy28ESQbSUg6pL6gYVr651mKlRppgRHArlQe2qn5ORKAgRJOYi7q-L0ZJqdR5P9PgWHiDCbzMl1dBlngh3WDtnYzVlzHTSo6CTZRJ0kp_BGbTfLnHp1UAoTOCsTs'
    },
    {
        id: 8,
        title: 'University Game Dev Fest',
        date: 'Dec 9-11, 2024',
        desc: 'Create the next indie hit in 48 hours. All platforms welcome - mobile, desktop, VR, and console.',
        tags: ['Gaming', 'VR/AR', 'In-Person'],
        capMin: '4',
        capMax: '5',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiRvUR5Fjieve_21MoD8bBqn8gMGcINAmM5J8OXWy5mGWVvold_bH_F3YloOzAEiG8UtNFEFd3tUMAd1QiTOHerw3BP6ci_Ru2z2MK1Zz9iG3iKjoG87Myl1BJeOK48kIe1kpOYBnEo_0VgM4iy28ESQbSUg6pL6gYVr651mKlRppgRHArlQe2qn5ORKAgRJOYi7q-L0ZJqdR5P9PgWHiDCbzMl1dBlngh3WDtnYzVlzHTSo6CTZRJ0kp_BGbTfLnHp1UAoTOCsTs'
    }
];

export default function EventsPage() {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const perPage = 6;

    const filtered = useMemo(() => {
        if (!query.trim()) return DUMMY_EVENTS;
        const q = query.toLowerCase();
        return DUMMY_EVENTS.filter(e =>
            e.title.toLowerCase().includes(q) ||
            e.desc.toLowerCase().includes(q) ||
            e.tags.join(' ').toLowerCase().includes(q)
        );
    }, [query]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
    const visible = filtered.slice((page - 1) * perPage, page * perPage);

    return (
        <>
            <main className="events-main">
                <div className="layout">
                    <div className="page-head">
                        <h1>Upcoming Events &amp; Competitions</h1>
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
                            <EventCard key={ev.id} event={ev} />
                        ))}
                    </div>

                    <Pagination page={page} setPage={setPage} total={totalPages} />
                </div>
            </main>
        </>
    );
}
