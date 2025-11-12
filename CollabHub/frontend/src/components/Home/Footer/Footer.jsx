import React from 'react';
import './Footer.css';
import { Users} from 'lucide-react';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <Users size={24} />
                    <span>TeamUp</span>
                </div>
                <ul className="footer-links">
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#terms">Terms of Service</a></li>
                </ul>
                <div className="footer-social">
                    <div className="social-icon">f</div>
                    <div className="social-icon">t</div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 TeamUp. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;