import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Heart Disease Prediction",
      description:
        "Built a classification model using patient medical data to predict heart disease risk. Achieved 85% accuracy with Random Forest and deployed using Streamlit.",
      tech: ["Python", "Scikit-learn", "Streamlit"],
      image: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", // 🔹 Add your image path here
      github: "https://github.com/yourusername/heart-disease-prediction",
      live: "https://yourstreamlitapp.com",
    },
    {
      title: "Buldozer Price Prediction",
      description:
        "Regression model to predict house prices based on location, size, and features. Used feature engineering and XGBoost for improved predictions.",
      tech: ["Pandas", "XGBoost", "Matplotlib"],
      image: "https://images.unsplash.com/photo-1667328904760-0de92e693304?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", // 🔹 Add your image path here
      github: "https://github.com/yourusername/house-price-prediction",
      live: "https://yourdemoapp.com",
    },

       {
      title: "Car Price Prediction",
      description:
        "Regression model to predict house prices based on location, size, and features. Used feature engineering and XGBoost for improved predictions.",
      tech: ["Pandas", "XGBoost", "Matplotlib"],
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", // 🔹 Add your image path here
      github: "https://github.com/yourusername/house-price-prediction",
      live: "https://my-first-machien-learning-project.onrender.com/",
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Hands-on ML projects that demonstrate my learning journey
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              
              {/* 🔹 Project Image */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                <div className="image-overlay"></div>
              </div>


              {/* 🔹 Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* 🔹 Project Links */}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
