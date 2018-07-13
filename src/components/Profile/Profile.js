import React from "react";

import "./profile.sass";

export const Profile = () =>
    <div className="profile" >
        <img className="icon" src="./placeholder.png" />
        <div className="info">
            <div className="name">Adele Reed</div>
            <div className="job-title">Go/Networking Specialist</div>
            <div className="quote">I like to make stuff</div>
            <div className="contact-links">
                <a href="https://github.com/virepri" alt="Virepri's github" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div >;

export default Profile;