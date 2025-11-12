import React from 'react';
import './Pagination.css';

export default function Pagination({ page, setPage, total }) {
    function go(p) { if (p >= 1 && p <= total) setPage(p); }
    const pages = [];
    for (let i = 1; i <= total; i++) pages.push(i);

    return (
        <div className="pagination-wrap">
            <nav className="pagination">
                <button onClick={() => go(page - 1)} disabled={page === 1}>‹</button>
                {pages.map(p => (
                    <button key={p} className={p === page ? 'active' : ''} onClick={() => go(p)}>{p}</button>
                ))}
                <button onClick={() => go(page + 1)} disabled={page === total}>›</button>
            </nav>
        </div>
    );
}
