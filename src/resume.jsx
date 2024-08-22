import React from "react";
import './resume.css';
const user={
    name:'Amresh Shah',
    position: 'Solutions Developer',
    phone: '+977 9813443841',
    address: 'Bhaktapur, Nepal',
    linkedIn: 'https://www.linkedin.com/in/amrace/',
    email: 'amresh.shah@live.com',
};

export default function Resume() {
    return (
        <>
        <div className="a4-page">
        <div className="tspace">
            <div><span className="name">{user.name}</span> <span className="titlep"> ({user.position}) </span>
                </div>
                <div className="user-info">
                    <div className="contact-info">
                    <span><b>Phone:</b> {user.phone}</span>
                    <span><b>Address:</b> {user.address}</span>
                    <span><b>LinkedIn:</b> {user.linkedIn}</span>
                    <span><b>Email:</b> {user.email}</span>
                </div>
        </div>
        </div>

        <div>
            <h2 className="titleH">Profile</h2>
            <div>
                <p>A motivated, conscientious, and visionary undergraduate student seeking to utilize past experiences to give back to the society. Driven and determined for self-learning and acquiring skills with minimal supervision and training.</p>
            </div>
        </div>

        <div>
            <h2 className="titleH">Professional Experience</h2>
            <div className="experience">
                <div className="left">
                    <span>Apprentice Garage Fellow and Solutions Developer</span>
                    <span>University of Victoria INSPIRE Program</span>
                </div>
                <div className="right">
                    <span>AUGUST 2024 to JANUARY 2025</span>
                    <span>LALITPUR, NEPAL</span>
                </div>
            </div>
            
            <div>
                <ul>
                    <li>Collaborated with a multidisciplinary team to co-design and develop technology solutions addressing social, economic, and environmental challenges.</li>
                    <li>Participated in workshops and training sessions, gaining hands-on experience in DevOps, API design, and agile project management methodologies.</li>
                    <li>Contributed to the research and development of sustainable technology initiatives under the guidance of industry mentors and academic experts from UVic.</li>
                </ul>
            </div>
        </div>

        <div>
            <div className="experience">
                <div className="left">
                    <span>Student Partnership Program 2022</span>
                    <span>Leapfrog Technology</span>
                </div>
                <div className="right">
                    <span>October 2019 to MARCH 2022</span>
                    <span>KATHMANDU, NEPAL</span>
                </div>
            </div>
            
            <div>
                <ul>
                    <li>Led a college team in the Leapfrog Student Partnership Program Hackathon, guiding peers in conceptualizing and developing a news portal website.</li>
                    <li>Recognized for outstanding documentation, presentation, and advertisement creation during the competition.</li>
                </ul>
            </div>
        </div>


        <div>
            <h2 className="titleH">Education</h2>
            <div className="experience">
                <div className="left">
                    <span>B.E Computer Science and Engineering</span>
                    <span>Nepal Engineering College</span>
                </div>
                <div className="right">
                    <span>NOVEMBER 2019 to JANUARY 2025</span>
                    <span>CHANGUNARAYAN, BHAKTAPUR</span>
                </div>
            </div>

            <div>
            <span> Club Affiliations: Led the CARRD and the Robotics Club </span> <br />
            <span>Relevant Coursework: Programming (C++, Java, Python), Data Structures & Algorithms, Object-Oriented Programming, Database Systems (SQL), Computer Networks, Operating Systems, Software Engineering, <br /> Electives: Big Data, Technology Innovation for Sustainable Development, Cloud Computing</span>
            <br />
            </div>    
        </div>

        <div>
            <div className="experience">
                <div className="left">
                    <span>GCE Advanced Levels</span>
                    <span>St. Xavier's College Maitighar</span>
                </div>
                <div className="right">
                    <span>APRIL 2015 to NOVEMBER 2017</span>
                    <span>MAITIGHAR, KATHMANDU</span>
                </div>
            </div>
        </div>   

        <div>
            <h2 className="titleH">Skills</h2>
            <div className="skills">
                <div className="column">
                    <span>Software Proficiency: Microsoft Office, Adobe Photoshop</span><br />
                    <span>Multimedia Production: Video & Audio Editing, Media and Podcast Production</span><br />
                    <span>Leadership & Communication: Leadership, Content Writing, Public Speaking</span><br />
                    <span>Core Strengths: Adaptability, Team Collaboration, Project Management</span>
                </div>
                <div className="column">
                    <span>Web Development: HTML, CSS, JavaScript, WordPress</span><br />
                    <span>Programming Languages: Python, C#</span><br />
                    <span>Database Management: SQL</span>
                </div>
            </div>
        </div>

    </div>
        </>
    );
}