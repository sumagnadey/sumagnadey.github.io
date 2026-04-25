import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar, Building2 } from 'lucide-react';
import './Education.css';

const educationData = [
    {
        degree: "B.Tech (CSE)",
        school: "Meghnad Saha Institute of Technology",
        university: "MAKAUT",
        score: "DGPA: 8.84",
        location: "Kolkata, India",
        date: "2017 - 2021",
        frontImage: "/assets/College.jpg",
        backLogo: "/assets/msit_logo.jpg",
        accent: '#818cf8',
    },
    {
        degree: "Higher Secondary",
        school: "Kenduadihi High School",
        university: "WBCHSE",
        score: "Percentage: 89%",
        location: "Bankura, India",
        date: "2015 - 2017",
        frontImage: "/assets/Kenduadihi.jpg",
        backLogo: "/assets/wbchse_logo.png",
        accent: '#a78bfa',
    },
    {
        degree: "Secondary",
        school: "Kenduadihi High School",
        university: "WBBSE",
        score: "Percentage: 91.14%",
        location: "Bankura, India",
        date: "2012 - 2015",
        frontImage: "/assets/Kenduadihi.jpg",
        backLogo: "/assets/wbbse_logo.png",
        accent: '#c084fc',
    }
];

const Education = () => {
    return (
        <section id="education" className="section education-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">My <span className="text-gradient">Education</span></h2>
                    <p className="section-subtitle">Academic background and qualifications</p>
                </div>

                <div className="edu-cards-row">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="edu-card-v2"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                        >
                            {/* Hero image area */}
                            <div className="edu-v2-image">
                                <img src={edu.frontImage} alt={edu.school} />
                                <div className="edu-v2-image-overlay" />
                                <div className="edu-v2-degree-badge">{edu.degree}</div>
                                <div className="edu-v2-logo">
                                    <img src={edu.backLogo} alt={edu.university} />
                                </div>
                            </div>

                            {/* Card body */}
                            <div className="edu-v2-body">
                                <h3 className="edu-v2-school">{edu.school}</h3>
                                <span className="edu-v2-university">{edu.university}</span>

                                <div className="edu-v2-meta">
                                    <div className="edu-v2-meta-item">
                                        <Calendar size={13} />
                                        <span>{edu.date}</span>
                                    </div>
                                    <div className="edu-v2-meta-item">
                                        <MapPin size={13} />
                                        <span>{edu.location}</span>
                                    </div>
                                </div>

                                <div className="edu-v2-score" style={{ '--accent': edu.accent }}>
                                    <Award size={16} />
                                    <strong>{edu.score}</strong>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
