import react from 'react'
import './Hero.css'
import hero from '../../../assets/hero.png'
export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Don't Code Alone. Find Your Squad. </h1>
                <p>The ultimate platform for students to connect, collaborate, and conquer hackathons and competitions together.</p>
                <div className="hero-buttons">
                    <button className="btn-primary">Create a Team</button>
                    <button className="btn-secondary">Find a Team</button>
                </div>
            </div>
            {/* <div className="hero-image"></div> */}
        </section>
    );
};
