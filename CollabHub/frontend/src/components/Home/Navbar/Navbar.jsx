import react from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Users, Calendar, Home, Plus, User,CircleUserRound } from 'lucide-react';

export default function Navbar() {
    return (
        <>
            <nav className="navbar-desktop">
                <div className="nav-left">
                    <div className="logo">
                        <Users size={28} />
                        {/* 3. Changed logo to be a Link to home */}
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                            <span>TeamUp</span>
                        </Link>
                    </div>
                    <ul className="nav-links">
                        {/* 4. Converted <a> to <Link> and href to to. Removed the <FindTeam /> component. */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/findTeam">Find Teams</Link></li>
                        <li><Link to="/findmember">Find Your Crew</Link></li>
                        <li><Link to="/event">Explore Events</Link></li>
                        <li><Link to="/profile">My Profile</Link></li>
                    </ul>
                </div>
                <div className="nav-right">
                    {/* <div className="search-box">
                        <Search size={18} />
                        <input type="text" placeholder="Search" />
                    </div> */}
                    {/* 5. Converted the login button to a Link */}
                    <Link to="/" className="add-team" style={{ textDecoration: 'none' }}>
                        <Plus />
                    </Link>
                    <Link to="/login" className="btn-login" style={{ textDecoration: 'none' }}>
                        Log In
                    </Link>
                </div>
            </nav>

            {/* 6. Converted all mobile navigation <a> tags to <Link> tags */}
            <nav className="nav-mobile-top">
                <div className="nav-top-left">
                    <div className="logo">
                        <Users size={28} />
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                            <span>TeamUp</span>
                        </Link>
                    </div>
                </div>
                <div className="nav-top-right">
                    <Link to="/login" className="btn-login" style={{ textDecoration: 'none' }}>
                        Log In
                    </Link>
                    <Link to="/profile" className="profile" style={{ textDecoration: 'none' }}>
                        <CircleUserRound />
                    </Link>
                </div>
            
            </nav>
            <nav className="navbar-mobile">
                <Link to="/" className="nav-mobile-item">
                    <Home size={24}/>
                </Link>
                <Link to="/findteam" className="nav-mobile-item">
                    <Users size={24} />
                </Link>
                <Link to="/create" className="nav-mobile-item nav-mobile-center">
                    <Plus size={28} />
                </Link>
                <Link to="/event" className="nav-mobile-item">
                    <Calendar size={24} />
                </Link>
                <Link to="/findmember" className="nav-mobile-item">
                    <User size={24} />
                </Link>
            </nav>

        </>
    );
};