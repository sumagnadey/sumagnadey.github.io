import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        role: "AI & Quantum Engineer",
        company: "HSBC Software Development India",
        location: "Hyderabad, India",
        date: "Jan 2023 - Present",
        logo: "/assets/HSBC_logo.png",
        description: [
            "Working in HSBC LAB (Innovation & Ventures) on end-to-end RAG pipelines across multiple LLMs, with an emphasis on model evaluation, MLOps, and deployment across AWS, Azure, and GCP.",
            "Designed and deployed multi-LLM RAG pipeline, reducing hallucinations.",
            "Develop Agentic AI based solutions with MPC.",
            "Built evaluation harness across models (OpenAI, Claude, Llama, Mistral) with cost/latency/quality dashboards; automated regression checks on knowledge drift.",
            "Implemented PQC primitives (e.g., Kyber/Dilithium) in service handshakes and key rotation; threat-modeled quantum risk to data-in-transit/at-rest.",
            "Prototyped QML (variational classifiers, QSVM) and assessed performance vs classical baselines on HPC; integrated with simulators/hardware backends."
        ]
    },
    {
        role: "Cloud AI Engineer",
        company: "Cognizant Technology Solutions",
        location: "Hyderabad, India",
        date: "Aug 2021 - Jan 2023",
        logo: "/assets/Logo_Cognizant.png",
        description: [
            "Designed and developed some ML models using Tensorflow.",
            "Additionally, used Cloud Dataflow for data processing tasks, Cloud Composer for orchestration, Pub/Sub for messaging and streaming data and BigQuery for data warehousing."
        ]
    },
    {
        role: "Summer Research Intern in AI - Medical Signal Processing",
        company: "IEEE EMBS IIT Kharagpur",
        location: "Kharagpur, India",
        date: "Jul 2021 - Oct 2021",
        logo: "/assets/IIT_Kharagpur_Logo.png",
        description: [
            "Worked with medical signal processing using Deep Learning.",
            "Worked on a research project titled 'Computer-Aided Detection of Lesions from Coronary Angiograms Based on Contrast Learning Technique'."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container" style={{ maxWidth: '900px' }}>
                <div className="section-header text-center">
                    <h2 className="section-title">Work <span className="text-gradient">Experience</span></h2>
                    <p className="section-subtitle">My professional journey so far</p>
                </div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="timeline-marker">
                                <div className="timeline-icon-bg">
                                    <Briefcase size={20} className="timeline-icon" />
                                </div>
                            </div>

                            <div className="timeline-content glass-card">
                                <div className="timeline-header">
                                    <div className="timeline-company-logo">
                                        <img src={exp.logo} alt={exp.company} />
                                    </div>
                                    <div className="timeline-title-area">
                                        <h3 className="timeline-role">{exp.role}</h3>
                                        <h4 className="timeline-company">{exp.company}</h4>
                                    </div>
                                </div>

                                <div className="timeline-meta">
                                    <div className="meta-item">
                                        <Calendar size={16} />
                                        <span>{exp.date}</span>
                                    </div>
                                    <div className="meta-item">
                                        <MapPin size={16} />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                <ul className="timeline-desc">
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
