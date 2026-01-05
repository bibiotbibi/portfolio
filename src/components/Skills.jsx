import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skills = {
    frontend: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 85 }
    ],
    backend: [
      { name: 'Firebase', level: 80 },
      { name: 'Node.js Basics', level: 65 }
    ],
    tools: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Vite', level: 85 },
      { name: 'Netlify', level: 80 },
      { name: 'Firebase Hosting', level: 80 }
    ]
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="skills-subtitle">
          Proficient in modern frontend technologies with a strong commitment to continuous learning and growth in web development.
        </p>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3>💻 Frontend Development</h3>
            <div className="skill-list">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>⚙️ Backend & Services</h3>
            <div className="skill-list">
              {skills.backend.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>🛠️ Tools & Platforms</h3>
            <div className="skill-list">
              {skills.tools.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="learning-mindset">
          <div className="mindset-icon">🚀</div>
          <div className="mindset-content">
            <h3>Continuous Learning</h3>
            <p>
              I'm constantly exploring new technologies and best practices in web development. 
              Every project is an opportunity to deepen my knowledge and expand my skillset. 
              I'm passionate about staying updated with industry trends and mastering new tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
