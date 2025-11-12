import React from "react";
import "./ProfileCard.css";

export default function ProfileCard({ user, onEdit }) {
    return (
        <div className="profile-card">
            <div className="avatar" style={{ backgroundImage: `url(${user.avatar})` }} />
            <div className="profile-info">
                <h2 className="name">{user.name}</h2>
                <p className="role">{user.role}</p>
                <p className="bio">{user.bio}</p>

                <button className="edit-btn" onClick={onEdit}>Edit Profile</button>
            </div>
        </div>
    );
}
