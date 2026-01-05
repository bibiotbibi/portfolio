import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">Have a project in mind or want to collaborate? I'd love to hear from you!</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-method">
              <div className="method-icon">📧</div>
              <div className="method-details">
                <h3>Email</h3>
                <p><a href="mailto:alex.johnson.dev@gmail.com">bibiotbibi@gmail.com</a></p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">📱</div>
              <div className="method-details">
                <h3>Phone</h3>
                <p><a href="tel:+1234567890">+880 1885565622</a></p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">💬</div>
              <div className="method-details">
                <h3>WhatsApp</h3>
                <p><a href="https://wa.me/1234567890">+01885565622</a></p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">📍</div>
              <div className="method-details">
                <h3>Location</h3>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="social-section">
              <h3>Connect With Me</h3>
              <div className="social-links">
                <a href="https://github.com/bibiotbibi" className="social-link" title="GitHub">
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/bibi-moriom/" className="social-link" title="LinkedIn">
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.linkedin.com/in/bibi-moriom/" className="social-link" title="Twitter">
                  <span>Twitter</span>
                </a>
                <a href="https://www.linkedin.com/in/bibi-moriom/" className="social-link" title="Facebook">
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && <div className="success-message">✓ Message sent successfully!</div>}
            
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or inquiry..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
