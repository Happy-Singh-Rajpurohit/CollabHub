import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import ProfileCard from "./ProfileCard";
import Tabs from "./Tabs";

export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const dummyUser = {
            id: "u1",
            name: "Alex Doe",
            role: "Computer Science Student at University of Tech",
            bio:
                "A passionate developer interested in building innovative solutions for social good. Actively looking for a hackathon team!",
            avatar:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBRwFXehjCWB022n3YTkM67MCIfYx1aqMEu4_j-RtCLQkr3iVdra9xPiMLBdn21D6CfDID0fY_pvh8WxsnhAtkdaGvrr-4corzYWBunpu3D6HxGQcWU-e29fMLbxRb381wrSpD9YPIhwsM6VdH9hyShxwQHnUuBsZv0Lz6DguVbbFRx4iIEZbsEEZZ6QtwMxDzMSGJrlVb0y5fEWMr9-SzOL-w1tQDCiZDG9wJAL5s8ADNE0FGrGdSTBjmX0ECrgLEIF4eRADzPEh0",
            skills: ["Python", "React", "JavaScript", "Figma", "UI/UX Design", "Node.js", "Agile Methodology"],
        };

        const dummyTeams = [
            {
                id: "t1",
                name: "Code Wizards",
                event: "Hack The North 2024",
                members: 4,
                capacity: 5
            },
            {
                id: "t2",
                name: "Market Mavericks",
                event: "McKinsey Case Competition",
                members: 4,
                capacity: 5
            }
        ];

        // set after small timeout to simulate fetch
        setTimeout(() => {
            setUser(dummyUser);
            setTeams(dummyTeams);
        }, 150);
    }, []);
    function handleEditProfile() {
        alert("Edit profile clicked — wire to your edit flow.");
    }

    if (!user) return <div className="profile-loading layout">Loading...</div>;

    return (
        <div className="profile-page layout">
            <div className="profile-grid">
                <aside className="left-col">
                    <ProfileCard user={user} onEdit={handleEditProfile} />
                </aside>

                <section className="right-col">
                    <Tabs user={user} teams={teams} links={[
                        { id: "ln", label: "linkedin.com/in/alexdoe", href: "#" },
                        { id: "gh", label: "github.com/alexdoe", href: "#" },
                        { id: "site", label: "alexdoe.com", href: "#" }
                    ]} />
                </section>
            </div>
        </div>
    );
}
