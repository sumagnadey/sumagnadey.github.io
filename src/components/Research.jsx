import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import './Research.css';

import ICCE from '../assets/ICCE.png';
import ICCEDark from '../assets/ICCEDark.png';
import IntechOpen from '../assets/intechopen.png';
import IJPE from '../assets/IJPE.png';
import IJPEDARK from '../assets/IJPEDARK.png';
import IJ from '../assets/IJ.png';
import Springer from '../assets/Springer.png';
import SpringerDark from '../assets/SpringerDark.png';
import SPIEDigital from '../assets/SPIEDigital.png';
import Elsevier from '../assets/elsevier.jpg';
import EmbcDark from '../assets/embc_dark.png';
import SpieLogo from '../assets/spie_logo.svg';
import IEEELogo from '../assets/ieee_logo.svg';
import STMLogo from '../assets/stm_logo.png';
import MDPILogo from '../assets/mdpi_logo.svg';
import EMBCLogo from '../assets/embc_logo.png';
import IEEE_VLSI from '../assets/ieee_vlsi_logo.png';

const Research = ({ darkTheme }) => {
  const papers = [
    {
      logo: darkTheme ? SpringerDark : Springer,
      title: 'Tangent-cut optimizer on gradient descent: an approach towards Hybrid Heuristics',
      journal: 'Artificial Intelligence Review',
      url: 'https://doi.org/10.1007/s10462-021-09984-0'
    },
    {
      logo: darkTheme ? SPIEDigital : SpieLogo,
      title: 'Malaria detection through digital microscopic imaging using Deep Greedy Network with transfer learning',
      journal: 'Journal of Medical Imaging',
      url: 'https://doi.org/10.1117/1.JMI.8.5.054502'
    },
    {
      logo: Elsevier,
      title: 'Cipher Constrained Encoding for constraint optimization in Extended Nucleic Acid Memory',
      journal: 'Computational Biology and Chemistry, Elsevier',
      url: 'https://doi.org/10.1016/j.compbiolchem.2022.107696'
    },
    {
      logo: IEEELogo,
      title: 'Relative Learning Rate Adaptation on Loss Feedback',
      journal: 'TechRxiv. Preprint',
      url: 'https://doi.org/10.36227/techrxiv.21980120.v1'
    },
    {
      logo: darkTheme ? IJPE : IJPEDARK,
      title: 'Encrypted Neural Network',
      journal: 'International Journal of Performability Engineering',
      url: 'https://doi.org/10.23940/ijpe.22.06.p8.453462'
    },
    {
      logo: IJ,
      title: 'Diabetes prediction and validation model using ML classification algorithms',
      journal: 'International Journal of Advanced Research in Computer Science',
      url: 'http://dx.doi.org/10.26483/ijarcs.v11i5.6654'
    },
    {
      logo: STMLogo,
      title: 'An Optimised CPU Scheduling Algorithm With Adaptive Time Quantum Approach',
      journal: 'JOURNAL OF OPERATING SYSTEMS DEVELOPMENT & TRENDS',
      url: 'https://doi.org/10.37591/joosdt.v8i2.6'
    },
    {
      logo: MDPILogo,
      title: 'Learning Rate Tuner with Relative Adaptation (LRT-RA): Road to Sustainable Computing',
      journal: 'Applied Math, MDPI - (Accepted, In Press)',
      url: '#'
    },
    {
      logo: darkTheme ? ICCEDark : ICCE,
      title: 'Deep Greedy Network: a tool for medical diagnosis on exiguous dataset of COVID-19',
      journal: '2020 IEEE 1st International Conference for Convergence in Engineering (ICCE)',
      url: 'https://doi.org/10.1109/ICCE50343.2020.9290715'
    },
    {
      logo: darkTheme ? EmbcDark : EMBCLogo,
      title: 'Computer-Aided Detection of Lesions from Coronary Angiograms Based on Contrast Learning Technique',
      journal: '44th Annual International Conference of the IEEE EMBC',
      url: 'https://doi.org/10.1109/EMBC48229.2022.9871034'
    },
    {
      logo: IEEE_VLSI,
      title: 'Design and Implementation of Authentication System using Deep Convoluted Siamese Network',
      journal: '3rd International Conference on VLSI Device, Circuit and System',
      url: 'https://doi.org/10.1109/VLSIDCS53788.2022.9811444'
    },
    {
      logo: IEEE_VLSI,
      title: 'VLSI Routing Optimization using Hybrid PSO based on Reinforcement Learning',
      journal: '3rd International Conference on VLSI Device, Circuit and System',
      url: 'https://doi.org/10.1109/VLSIDCS53788.2022.9811434'
    },
    {
      logo: IEEE_VLSI,
      title: 'Emergency Medical Assistance by Ambulance Drone Using Machine Learning, Light-weight Cryptography and Variable Image Steganography',
      journal: '3rd International Conference on VLSI Device, Circuit and System',
      url: 'https://doi.org/10.1109/VLSIDCS53788.2022.9811471'
    },
    {
      logo: IntechOpen,
      title: 'Deep Learning Algorithms for Efficient Analysis of ECG Signals to Detect Heart Disorders',
      journal: 'IntechOpen Book Chapter',
      url: 'http://dx.doi.org/10.5772/intechopen.103075'
    }
  ];

  return (
    <section id="research" className="section research-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container"
      >
        <div className="section-header text-center">
          <BookOpen className="section-icon" size={28} style={{ color: 'var(--primary-color)' }} />
          <h2 className="section-title">Research <span className="text-gradient">& Publications</span></h2>
          <p className="section-subtitle">14+ papers in IEEE, Springer, Elsevier, and SPIE</p>
        </div>

        <div className="research-grid">
          {papers.map((paper, index) => (
            <motion.a
              key={index}
              href={paper.url}
              target="_blank"
              rel="noreferrer"
              className="research-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -6 }}
            >
              <span className="research-number">#{String(index + 1).padStart(2, '0')}</span>

              <div className="research-card-logo">
                <img
                  src={paper.logo}
                  alt=""
                  onError={(e) => { e.target.style.opacity = '0.3'; }}
                />
              </div>

              <div className="research-card-content">
                <h3 className="research-card-title">{paper.title}</h3>
                <p className="research-card-journal">{paper.journal}</p>
              </div>

              <span className="research-card-link">
                Read Paper <ExternalLink size={14} />
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Research;
