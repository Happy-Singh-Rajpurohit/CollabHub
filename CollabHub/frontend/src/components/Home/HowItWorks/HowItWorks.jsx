import React from "react";
import './HowItWorks.css'
import {UserPlus, Search, MessageSquare} from 'lucide-react';
export default function HowItWorks() {
    const steps = [
        {
            icon: <UserPlus size={24} />,
            title: "Create Your Profile",
            description: "Sign up and build a profile that showcases your skills, projects, and what you're looking for in a team."
        },
        {
            icon: <Search size={24} />,
            title: "Discover Teams & Events",
            description: "Browse open team positions and find exciting hackathons or competitions to join."
        },
        {
            icon: <MessageSquare size={24} />,
            title: "Start Collaborating",
            description: "Connect with potential teammates, chat, and start building your next great project together."
        }
    ];

    return (
        <section className="how-it-works">
            <h2>How It Works</h2>
            <div className="steps">
                {steps.map((step, index) => (
                    <div className="step" key={index}>
                        <div className="step-icon">
                            {step.icon}
                        </div>
                        <div className="step-content">
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
