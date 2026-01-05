import React from 'react';
import '../styles/Education.css';

function Education() {
  const educationList = [
    {
      id: 1,
      degree: 'Secondary School',
      level: 'Class X',
      year: '2016 - 2020',
      description: 'Strong foundation in academics with focus on science and mathematics.',
      icon: '📚'
    },
    {
      id: 2,
      degree: 'Higher Secondary',
      level: 'Class XII',
      year: '2021 - 2023',
      description: 'Completed higher secondary education with specialization in Science stream.',
      icon: '🎓'
    },
    {
      id: 3,
      degree: 'Bachelor of Science Honours',
      level: 'Physics Department (1st Year)',
      year: '2024 - Present',
      description: 'Currently pursuing Bachelor of Science in Physics. Passionate learner with focus on problem-solving and technical skills.',
      icon: '🔬'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-grid">
          {educationList.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-icon">{edu.icon}</div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-level">{edu.level}</p>
                <p className="education-year">{edu.year}</p>
                <p className="education-description">{edu.description}</p>
              </div>
              <div className="education-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
