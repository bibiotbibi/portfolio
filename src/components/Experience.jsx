import React from 'react';
import '../styles/Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Self-Driven Frontend Developer',
      company: 'Personal Learning & Projects',
      duration: '8+ Months',
      description: 'Intensive, self-directed learning journey focused on becoming a proficient frontend developer. Built 12+ projects from scratch, each designed to solve real-world problems and practice new concepts.',
      highlights: [
        'Completed 8+ months of consistent, dedicated learning',
        'Built 12+ projects ranging from simple to complex applications',
        'Mastered React framework and modern JavaScript (ES6+)',
        'Integrated Firebase for authentication and real-time data management',
        'Worked extensively with REST APIs and third-party integrations',
        'Focused on responsive design and mobile-first development',
        'Implemented best practices for code structure and maintainability'
      ],
      skills: ['React', 'JavaScript ES6+', 'CSS3', 'Tailwind CSS', 'Firebase', 'APIs', 'Git']
    },
    {
      id: 2,
      title: 'Project-Based Learning & Practice',
      company: 'Continuous Development',
      duration: 'Ongoing',
      description: 'Building real-world projects as the primary learning method. Each project tackles different challenges and technologies to develop practical, job-ready skills.',
      highlights: [
        'Developing full-featured applications from concept to completion',
        'Problem-solving through hands-on implementation',
        'Learning from debugging and optimization challenges',
        'Practicing version control with Git and GitHub',
        'Building responsive, user-friendly interfaces',
        'Deploying projects to production (Netlify, Firebase Hosting)',
        'Constantly improving code quality and performance'
      ],
      skills: ['Problem Solving', 'Web Design', 'Performance', 'Deployment', 'Testing']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <p className="experience-subtitle">
          No formal client work yet, but strong practical experience through self-directed learning and 12+ completed projects
        </p>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-marker">
                <div className="marker-dot"></div>
                {index < experiences.length - 1 && <div className="marker-line"></div>}
              </div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-info">
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-company">{exp.company}</p>
                    <p className="experience-duration">📅 {exp.duration}</p>
                  </div>
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="experience-highlights">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="experience-skills">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-note">
          <div className="note-icon">💡</div>
          <div className="note-content">
            <h3>Strong Practical Foundation</h3>
            <p>
              While I haven't worked with clients yet, my 8+ months of intensive learning and 12+ project portfolio 
              demonstrates serious dedication to mastering frontend development. I'm ready to apply my practical skills 
              to real-world challenges and deliver high-quality solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
