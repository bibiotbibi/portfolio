import React, { useState } from 'react';
import '../styles/Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Book Courier',
      description: 'Online platform to send, receive, and track books. Users can manage shipments, add books, and track orders efficiently.',
      image: 'https://i.ibb.co.com/23ZnVBBc/Screenshot-32.png',
      tags: ['React.js', 'Tailwind CSS', 'Vite', 'Firebase', 'SweetAlert2'],
      liveLink: 'https://book-courier-fff3d.web.app/',
      githubLink: 'https://github.com/bibiotbibi/book-courier-client',
      highlights: ['Firebase Auth', 'Real-time Updates', 'Book Tracking'],
      fullDescription: 'Book Courier is a comprehensive online platform designed to revolutionize the way books are sent, received, and tracked. The platform provides users with an intuitive interface to manage shipments, add books to their collection, and efficiently track orders throughout the delivery process.',
      techStack: ['React.js', 'Tailwind CSS', 'Vite', 'Firebase Authentication', 'Firestore Database', 'Firebase Storage', 'SweetAlert2'],
      challenges: [
        'Implementing Firebase authentication with role-based access control',
        'Creating real-time shipment tracking and updates using Firestore',
        'Integrating smooth scroll animations and transitions for better UX',
        'Managing complex state for shipment data and user interactions'
      ],
      futureImprovements: [
        'Integration with payment gateway for seamless transactions',
        'Push notification system for shipment status updates',
        'Enhanced mobile responsiveness and PWA features',
        'Advanced analytics dashboard for shipment insights'
      ]
    },
    {
      id: 2,
      title: 'Krishi Link',
      description: 'Agricultural platform for farmers to manage crops, view markets, and connect with other users in the farming community.',
      image: 'https://i.ibb.co.com/nqHsmfXj/Screenshot-34.png',
      tags: ['React.js', 'Tailwind CSS', 'Firebase', 'SweetAlert2'],
      liveLink: 'https://krishi-link-23e7f.web.app/',
      githubLink: 'https://github.com/bibiotbibi/krishi-link-client',
      highlights: ['Crop Management', 'Market View', 'User Connection'],
      fullDescription: 'Krishi Link is an innovative agricultural platform that empowers farmers to efficiently manage their crops, stay updated with market trends, and connect with fellow farmers. The platform serves as a comprehensive solution for modern agricultural needs.',
      techStack: ['React.js', 'Tailwind CSS', 'Firebase Authentication', 'Firestore Database', 'Firebase Storage', 'SweetAlert2'],
      challenges: [
        'Implementing advanced filtering system for user-specific crop data',
        'Creating role-based access control for admin and regular users',
        'Handling efficient image uploads and storage in Firebase Storage',
        'Designing intuitive UI for complex agricultural data management'
      ],
      futureImprovements: [
        'Real-time crop pricing and market analytics integration',
        'Notification system for new crop listings and market updates',
        'Mobile-first design improvements for field usage',
        'Weather integration and crop recommendation system'
      ]
    },
    {
      id: 3,
      title: 'Game Hub',
      description: 'Interactive gaming platform featuring multiple games, user profiles, leaderboards, and social gaming features with beautiful modern design.',
      image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=Game+Hub',
      tags: ['React.js', 'CSS3', 'JavaScript', 'Local Storage', 'Animations'],
      liveLink: 'https://your-gamehub-demo.netlify.app',
      githubLink: 'https://github.com/bibiotbibi/game-hub-client',
      highlights: ['Multiple Games', 'Leaderboards', 'Social Features'],
      fullDescription: 'Game Hub is an engaging interactive gaming platform that brings together multiple games in one beautiful interface. Users can enjoy various games, track their progress, compete on leaderboards, and connect with other gamers in a vibrant gaming community.',
      techStack: ['React.js', 'CSS3 Animations', 'JavaScript ES6+', 'Local Storage', 'Canvas API', 'Web Audio API'],
      challenges: [
        'Creating smooth game mechanics and animations using Canvas API',
        'Implementing efficient state management for multiple games',
        'Designing responsive game interfaces that work across devices',
        'Building real-time leaderboard system with local storage'
      ],
      futureImprovements: [
        'Multiplayer functionality with WebSocket integration',
        'User authentication and cloud save system',
        'More game varieties and difficulty levels',
        'Social features like friend challenges and tournaments'
      ]
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="projects-subtitle">Showcasing my best work with modern technologies and clean code</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h3 className="overlay-title">{project.title}</h3>
                    <p className="overlay-description">{project.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-highlights">
                  {project.highlights.map((highlight, index) => (
                    <span key={index} className="highlight">{highlight}</span>
                  ))}
                </div>
                
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <button 
                    className="project-link primary-link"
                    onClick={() => openModal(project)}
                  >
                    View Details →
                  </button>
                  <div className="external-links">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="external-link">
                      Live Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="external-link">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <div className="modal-image">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="modal-project-image"
                />
              </div>
              <div className="modal-title-section">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <div className="modal-links">
                  <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="modal-link live">
                    🌐 Live Demo
                  </a>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="modal-link github">
                    📂 GitHub Repo
                  </a>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3>Project Overview</h3>
                <p>{selectedProject.fullDescription}</p>
              </div>

              <div className="modal-section">
                <h3>Technology Stack</h3>
                <div className="tech-stack">
                  {selectedProject.techStack.map((tech, index) => (
                    <span key={index} className="tech-item">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>Key Challenges</h3>
                <ul className="challenges-list">
                  {selectedProject.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>Future Improvements</h3>
                <ul className="improvements-list">
                  {selectedProject.futureImprovements.map((improvement, index) => (
                    <li key={index}>{improvement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
