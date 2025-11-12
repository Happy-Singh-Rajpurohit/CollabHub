import React from "react";
import MemberCard from "./MemberCard";

import './MemberPage.css'
const MemberList = ({ members }) => {
    if (!members.length) {
        return <p className="no-results">No teammates found 😢</p>;
    }

    return (
        <div className="member-list">
            {members.map((member) => (
                <MemberCard key={member._id || member.id} member={member} />
            ))}
        </div>
    );
};

export default MemberList;
