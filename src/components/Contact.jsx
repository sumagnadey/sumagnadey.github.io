import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="contact-container glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header text-center">
            <h2 className="section-title">Get in <span className="text-gradient">Touch</span></h2>
            <p className="section-subtitle">Let's talk about building something amazing together.</p>
          </div>

          <div className="contact-links">
            <a href="mailto:sumagna.dey@gmail.com" target="_blank" rel="noreferrer" className="contact-btn">
              <Mail size={22} />
              <span>Email</span>
            </a>

            <a href="https://api.whatsapp.com/send?phone=+917001496235&text=Hello" target="_blank" rel="noreferrer" className="contact-btn whatsapp">
              <MessageCircle size={22} />
              <span>Whatsapp</span>
            </a>

            <a href="tel:+917001496235" className="contact-btn phone">
              <Phone size={22} />
              <span>Call</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
