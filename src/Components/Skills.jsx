import React from "react";

const Skills = () => (
  <section id="skills">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Tools and technologies I work with</p>
      </div>

      <div className="skills-container">
        <div className="skill-category">
          <h3>Machine Learning</h3>
          <div className="skill-list">
            {["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Matplotlib"].map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Programming</h3>
          <div className="skill-list">
            {["Python", "SQL", "Git", "Jupyter", "VS Code"].map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Data Science</h3>
          <div className="skill-list">
            {["Data Cleaning", "EDA", "Feature Engineering", "Model Evaluation", "NLP Basics"].map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
