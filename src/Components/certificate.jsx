import React, { useState } from 'react';
import { ExternalLink, Calendar, Award } from 'lucide-react';

// Import local images


const certifications = [
  {
    id: '1',
    title: 'Complete A.I. & Machine Learning, Data Science Bootcamp',
    issuer: 'Udemy',
    date: 'Nov 4, 2025',
    credentialId: 'UC-cf0b544c-ed5c-4b79-9f76-8becc928767f',
    url: 'https://www.udemy.com/certificate/UC-cf0b544c-ed5c-4b79-9f76-8becc928767f',
    imageUrl: 'AI ML.jpg',
    tags: ['A.I', 'Machine Learning'],
  },
  {
    id: '2',
    title: 'Microsoft Power BI Desktop for Business Intelligence',
    issuer: 'Udemy',
    date: 'Jul 28, 2025',
    credentialId: 'UC-38d41a39-dc8e-49f0-bf3d-a31515054679',
    url: 'https://www.udemy.com/certificate/UC-38d41a39-dc8e-49f0-bf3d-a31515054679',
    imageUrl: 'powerbi.jpg',
    tags: ['Microsoft Power BI'],
  },
];

const Certification = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="certification-section" id="certifications">
      <div className="certification-container">
        <div className="certification-header">
          <h2>Certifications</h2>
          <p>Professional credentials that validate my expertise</p>
        </div>

        <div className="certification-grid">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`certification-card ${hoveredId === cert.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Full Certificate Image */}
              <div className="certificate-image-wrapper">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="image-link"
                >
                  <img
                    src={cert.imageUrl}
                    alt={`${cert.title} certificate`}
                    className="certificate-image"
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <ExternalLink className="overlay-icon" />
                    <span className="overlay-text">View Certificate</span>
                  </div>
                </a>
              </div>

              {/* Card Content */}
              <div className="card-content">
                <div className="card-header">
                  <Award className="icon award-icon" />
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    <ExternalLink className="icon" />
                  </a>
                </div>

                <h3 className="card-title">{cert.title}</h3>
                <p className="card-issuer">{cert.issuer}</p>

                <div className="card-date">
                  <Calendar className="icon" />
                  <span>{cert.date}</span>
                </div>

                {cert.credentialId && (
                  <p className="credential-id">ID: {cert.credentialId}</p>
                )}

                {cert.tags && cert.tags.length > 0 && (
                  <div className="tags">
                    {cert.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;