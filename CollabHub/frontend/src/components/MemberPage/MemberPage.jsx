import React, { useEffect, useState } from "react";
import axios from "axios";
import FilterBar from "./FilterBar";
import MemberList from "./MemberList";
import "./MemberPage.css";

const FindTeammatePage = () => {
    const [members, setMembers] = useState([]);
    const [filteredMembers, setFilteredMembers] = useState([]);
    const sampleData = [
        {
            id: 1,
            name: "Alex Johnson",
            role: "Frontend Developer",
            skills: ["React", "Node.js", "MongoDB"],
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id: 2,
            name: "Maria Garcia",
            role: "Backend Developer",
            skills: ["Node.js", "Python", "MongoDB"],
            avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        {
            id: 3,
            name: "Rahul Sharma",
            role: "Full Stack Developer",
            skills: ["React", "Express", "MongoDB"],
            avatar: "https://randomuser.me/api/portraits/men/78.jpg",
        },
        {
            id: 4,
            name: "Emily Davis",
            role: "UI/UX Designer",
            skills: ["Figma", "React", "Photoshop"],
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        },
    ];
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Try to fetch from backend
                const res = await axios.get("http://localhost:5000/api/teammates");
                setMembers(res.data);
                setFilteredMembers(res.data);
            } catch (error) {
                console.warn("⚠️ Backend not running, using local sample data.");
                setMembers(sampleData);
                setFilteredMembers(sampleData);
            }
        };

        fetchData();
    }, []);


    const handleFilter = (searchTerm, skill) => {
        const term = searchTerm.toLowerCase();
        const filtered = members.filter(
            (m) =>
                m.name.toLowerCase().includes(term) &&
                (skill === "" || m.skills.includes(skill))
        );
        setFilteredMembers(filtered);
    };

    return (
        <div className="layout">
        <div className="find-container">
            <div className="find-content">
                <h1 className="find-title">Find a Teammate</h1>
                <p className="find-subtitle">
                    Connect with like-minded people and build something amazing together.
                </p>
                <FilterBar onFilter={handleFilter} />
                <MemberList members={filteredMembers} />
            </div>
        </div>
        </div>
    );
};

export default FindTeammatePage;
