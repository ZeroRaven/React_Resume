import React, { useEffect, useState } from "react";
import './resume.css';

export default function Resumef() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/users/1')
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="a4-page">
            <div className="tspace">
                <div>
                    <span className="name">{user.name}</span> <span className="titlep">({user.position})</span>
                </div>
                <div className="user-info">
                    <div className="contact-info">
                        <span><b>Phone:</b> {user.phone}</span>
                        <span><b>Address:</b> {user.address}</span>
                        <span><b>LinkedIn:</b> <a href={user.linkedIn}>{user.linkedIn}</a></span>
                        <span><b>Email:</b> {user.email}</span>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="titleH">Profile</h2>
                <div>
                    <p>{user.profile}</p>
                </div>
            </div>

            <div>
    <h2 className="titleH">Professional Experience</h2>
    {user.professionalExperience.map((exp, index) => (
        <div key={index} className="experience">
            <div className="experience-columns">
                <div className="left">
                    <span>{exp.position}</span>
                    <span>{exp.company}</span>
                </div>
                <div className="right">
                    <span>{exp.duration}</span>
                    <span>{exp.location}</span>
                </div>
            </div>
            <div>
                <ul>
                    {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                    ))}
                </ul>
            </div>
        </div>
    ))}
</div>

            <div>
                <h2 className="titleH">Education</h2>
                {user.education.map((edu, index) => (
                    <div key={index} className="experience">
                        <div className="left">
                            <span>{edu.degree}</span>
                            <span>{edu.institution}</span>
                        </div>
                        <div className="right">
                            <span>{edu.duration}</span>
                            <span>{edu.location}</span>
                        </div>
                        <div>
                            {edu.details && edu.details.map((detail, idx) => (
                                <span key={idx}>{detail}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <h2 className="titleH">Skills</h2>
                <div className="skills">
                    <div className="column">
                        <span>Software Proficiency: {user.skills.softwareProficiency}</span><br />
                        <span>Multimedia Production: {user.skills.multimediaProduction}</span><br />
                        <span>Leadership & Communication: {user.skills.leadershipCommunication}</span><br />
                        <span>Core Strengths: {user.skills.coreStrengths}</span>
                    </div>
                    <div className="column">
                        <span>Web Development: {user.skills.webDevelopment}</span><br />
                        <span>Programming Languages: {user.skills.programmingLanguages}</span><br />
                        <span>Database Management: {user.skills.databaseManagement}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}