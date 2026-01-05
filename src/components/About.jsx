import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-intro">
            <div className="intro-card">
              <div className="intro-icon">🚀</div>
              <h3>My Development Journey</h3>
              <p>
                I'm a dedicated Frontend Developer with 8+ months of hands-on experience building responsive, 
                user-focused web applications. My journey started with a curiosity about how websites work and a 
                determination to turn that curiosity into expertise.
              </p>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <div className="card-header">
                <div className="card-icon">💡</div>
                <h3>How I Started Learning</h3>
              </div>
              <p>
                I began my web development journey by mastering the fundamentals—HTML5, CSS3, and vanilla JavaScript. 
                I invested time in understanding the "why" behind each concept, not just the "how." This strong foundation 
                allowed me to transition smoothly into React and tackle more complex challenges.
              </p>
              <div className="card-accent"></div>
            </div>

            <div className="about-card">
              <div className="card-header">
                <div className="card-icon">❤️</div>
                <h3>What I'm Passionate About</h3>
              </div>
              <p>
                I'm most passionate about <strong>frontend development and UI implementation</strong>. I love crafting 
                clean, intuitive interfaces that users enjoy interacting with. I thrive on solving complex layout problems, 
                optimizing performance, and building features that make a real difference.
              </p>
              <div className="card-accent"></div>
            </div>

            <div className="about-card">
              <div className="card-header">
                <div className="card-icon">🎯</div>
                <h3>12+ Projects & Growth</h3>
              </div>
              <p>
                I've completed <strong>12+ personal and practice-based projects</strong> to solidify my learning. Each 
                project was an intentional exercise in learning new concepts, exploring different architectures, and solving 
                real-world problems. From e-commerce applications to dashboard interfaces.
              </p>
              <div className="card-accent"></div>
            </div>

            <div className="about-card">
              <div className="card-header">
                <div className="card-icon">🌟</div>
                <h3>Beyond Code</h3>
              </div>
              <p>
                Outside of programming, I'm passionate about <strong>football</strong>, <strong>gaming</strong>, 
                exploring <strong>design principles</strong>, and continuously learning new technologies. I believe 
                that staying curious and maintaining balance in life makes me a better developer.
              </p>
              <div className="card-accent"></div>
            </div>
          </div>

          <div className="about-highlights">
            <h3>Core Strengths</h3>
            <div className="highlights-grid">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <span>Clean Code & Best Practices</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">📱</div>
                <span>Mobile-First Responsive Design</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <span>Performance & Optimization</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">♿</div>
                <span>Web Accessibility Standards</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🔧</div>
                <span>Modern Development Tools</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🎨</div>
                <span>UI/UX Design Principles</span>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">🚀</div>
              <div className="stat-content">
                <div className="stat-number">12+</div>
                <p>Projects Built</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-content">
                <div className="stat-number">8+</div>
                <p>Months Experience</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📱</div>
              <div className="stat-content">
                <div className="stat-number">100%</div>
                <p>Responsive Sites</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💻</div>
              <div className="stat-content">
                <div className="stat-number">5+</div>
                <p>Technologies</p>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <div className="cta-content">
              <h3>Ready to Build Something Amazing?</h3>
              <p>Let's collaborate and bring your ideas to life with clean, modern web solutions.</p>
              <button 
                className="cta-button"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
