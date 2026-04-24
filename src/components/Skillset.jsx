import { motion } from 'framer-motion';
import { Atom, Code2, Cloud, Database, Wrench } from 'lucide-react';
import './Skillset.css';

const skillCategories = [
  {
    title: 'Quantum & AI',
    icon: <Atom size={20} />,
    skills: [
      { name: 'Qiskit', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Qiskit-Logo.svg' },
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
      { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
      { name: 'Keras', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg' },
      { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg' },
      { name: 'PennyLane', fallbackEmoji: '⚛️' },
      { name: 'Cirq', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Google_Quantum_AI.png' },
    ]
  },
  {
    title: 'Languages',
    icon: <Code2 size={20} />,
    skills: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
      { name: 'SQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' },
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud size={20} />,
    skills: [
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
      { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' },
      { name: 'BigQuery', fallbackEmoji: '📊' },
      { name: 'Dataflow', fallbackEmoji: '🔄' },
      { name: 'Vertex AI', fallbackEmoji: '🤖' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
    ]
  },
  {
    title: 'Data & Databases',
    icon: <Database size={20} />,
    skills: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg' },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
    ]
  },
  {
    title: 'Tools',
    icon: <Wrench size={20} />,
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
      { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg' },
      { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg' },
    ]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 12 } }
};

const Skillset = () => {
  return (
    <section id="skillset" className="section skillset-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">My <span className="text-gradient">Skillset</span></h2>
          <p className="section-subtitle">Technologies and tools powering my work in Quantum AI</p>
        </div>

        <div className="skill-categories">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <div className="category-header">
                <span className="category-icon">{cat.icon}</span>
                <h3 className="category-title">{cat.title}</h3>
              </div>

              <motion.div className="category-skills" variants={containerVariants} initial="hidden"
                whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
                {cat.skills.map((skill, idx) => (
                  <motion.div key={idx} className="skill-chip" variants={itemVariants}
                    whileHover={{ y: -4, scale: 1.03 }}>
                    <div className="skill-icon-wrapper">
                      {skill.icon ? (
                        <img src={skill.icon} alt={skill.name} className="skill-icon" loading="lazy" />
                      ) : (
                        <span className="skill-emoji">{skill.fallbackEmoji}</span>
                      )}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillset;
