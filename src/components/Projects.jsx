import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        title: "Tic Tac Toe",
        description: "The last page of every student's notebook is reserved for Tic Tac Toe. Let's revisit those cherished childhood memories and ride the waves of nostalgia.",
        image: "/assets/Tic-Tac-Toe.jpg",
        tags: ["Python", "ML", "Maths", "Tkinter"],
        githubUrl: "https://github.com/sumagnadey/Mini_Project/tree/master/Tic%20Tac%20Toe",
        liveUrl: null
    },
    {
        title: "Face Recognition",
        description: "Developed an authentication system based on Face Recognition.",
        image: "/assets/face_recognition.png",
        tags: ["Python", "Digital Image Processing", "Open CV"],
        githubUrl: "https://github.com/sumagnadey/Mini_Project/tree/master/Face_recognition",
        liveUrl: null
    },
    {
        title: "Generate Faces",
        description: "Generate new images of faces using Generative Adversarial Networks (GAN)",
        image: "https://www.researchgate.net/publication/340884113/figure/fig3/AS:883691647684610@1587699915907/Structure-and-operation-of-InfoGAN-Information-maximizing-Generative-Adversarial.png",
        tags: ["Python", "Pytorch", "Deep CNN"],
        githubUrl: "https://github.com/sumagnadey/Udacity_Deep_Learning_NanoDegree/tree/master/4.%20project-face-generation",
        liveUrl: null
    },
    {
        title: "Detecting COVID-19 using Deep Learning",
        description: "Developed an CNN model to predict whether subject has Covid-19 or not.",
        image: "/assets/Covid19.png",
        tags: ["Python", "PyTorch", "TensorFlow", "Pillow"],
        githubUrl: "https://github.com/sumagnadey/Mini_Project/tree/master/covid%20detection",
        liveUrl: null
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="section-subtitle">Some of the selected works I've built</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card glass-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link-icon" aria-label="GitHub Repository">
                                                <Github size={24} />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link-icon" aria-label="Live Demo">
                                                <ExternalLink size={24} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
