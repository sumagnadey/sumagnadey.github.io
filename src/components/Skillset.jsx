import { motion } from 'framer-motion';
import { Atom, Code2, Cloud, Database, Wrench } from 'lucide-react';
import './Skillset.css';

const skillCategories = [
  {
    title: 'Quantum & AI',
    icon: <Atom size={20} />,
    skills: [
      { name: 'Qiskit', icon: '/assets/icons/qiskit.svg' },
      { name: 'TensorFlow', icon: '/assets/icons/tensorflow.svg' },
      { name: 'PyTorch', icon: '/assets/icons/pytorch.svg' },
      { name: 'Keras', icon: '/assets/icons/keras.svg' },
      { name: 'OpenCV', icon: '/assets/icons/opencv.svg' },
      { name: 'PennyLane', fallbackEmoji: '⚛️' },
      { name: 'Cirq', icon: '/assets/icons/cirq.png' },
    ]
  },
  {
    title: 'Languages',
    icon: <Code2 size={20} />,
    skills: [
      { name: 'Python', icon: '/assets/icons/python.svg' },
      { name: 'Java', icon: '/assets/icons/java.svg' },
      { name: 'JavaScript', icon: '/assets/icons/javascript.svg' },
      { name: 'C', icon: '/assets/icons/c.svg' },
      { name: 'SQL', icon: '/assets/icons/sql.png' },
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud size={20} />,
    skills: [
      { name: 'AWS', icon: '/assets/icons/aws.svg' },
      { name: 'Azure', icon: '/assets/icons/azure.svg' },
      { name: 'GCP', icon: '/assets/icons/gcp.svg' },
      { name: 'BigQuery', fallbackEmoji: '📊' },
      { name: 'Dataflow', fallbackEmoji: '🔄' },
      { name: 'Vertex AI', fallbackEmoji: '🤖' },
      { name: 'Docker', icon: '/assets/icons/docker.svg' },
      { name: 'Linux', icon: '/assets/icons/linux.svg' },
    ]
  },
  {
    title: 'Data & Databases',
    icon: <Database size={20} />,
    skills: [
      { name: 'MySQL', icon: '/assets/icons/mysql.svg' },
      { name: 'Oracle', icon: '/assets/icons/oracle.svg' },
      { name: 'Pandas', icon: '/assets/icons/pandas.svg' },
      { name: 'NumPy', icon: '/assets/icons/numpy.svg' },
    ]
  },
  {
    title: 'Tools',
    icon: <Wrench size={20} />,
    skills: [
      { name: 'Git', icon: '/assets/icons/git.svg' },
      { name: 'Postman', icon: '/assets/icons/postman.svg' },
      { name: 'Jenkins', icon: '/assets/icons/jenkins.svg' },
      { name: 'Jupyter', icon: '/assets/icons/jupyter.svg' },
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
