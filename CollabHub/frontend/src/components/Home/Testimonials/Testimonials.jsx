// src/components/Testimonials.jsx
import React from "react";
import './Testimonials.css'

export default function Testimonials(){
    const testimonials = [
        {
            text: "TeamUp was a game-changer for HackPrinceton. We found a designer in hours and ended up winning 2nd place! Couldn't have done it without this platform.",
            author: "Sarah L.",
            project: "Project: 'EcoSort App'",
            initials: "SL"
        },
        {
            text: "As a freshman, I was intimidated to join a team. TeamUp made it super easy to find other beginners and we learned so much together at our first college hackathon.",
            author: "Mike P.",
            project: "Project: 'CampusConnect'",
            initials: "MP"
        },
        {
            text: "Finally, a platform that understands what student developers need. The filtering is amazing for finding people with specific skills like 'React' or 'Figma'!",
            author: "Chloe W.",
            project: "Project: 'UniVerse Platform'",
            initials: "CW"
        }
    ];

    return (
        <section className="testimonials">
            <h2>Loved by Students Everywhere</h2>
            <div className="testimonial-grid">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <p className="testimonial-text">"{testimonial.text}"</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">{testimonial.initials}</div>
                            <div className="author-info">
                                <h4>{testimonial.author}</h4>
                                <p>{testimonial.project}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
