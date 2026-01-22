import React from "react";
import { motion } from "framer-motion";
import "../CSS/Resume.css";

export default function Resume() {
  return (
    <section className="resume-container container">
      <div className="resume-header">
        <h2>Resume</h2>
        <p>A quick glance at my journey.</p>
      </div>

      <motion.div
        className="resume-card"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 18 }}>
          <div>
            <div className="name-block">
              <h3 className="resume-title">Sahil Ghevariya</h3>
              <div className="resume-subtitle" style={{ marginBottom: 10 }}>Aspiring Machine Learning and Data Science Engineer</div>
              <div className="contact-list">
                <div>📞 8799904066</div>
                <div>✉️ sahilghevariya001@gmail.com</div>
                <div>
                  <a href="https://github.com/Sahilghevariya" target="_blank" rel="noreferrer" style={{ color: '#00b4ff' }}>GitHub</a>{' • '}
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" style={{ color: '#00b4ff' }}>LinkedIn</a>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 14 }} className="edu-box">
              <h4 style={{ marginTop: 0 }}>Education</h4>
              <div style={{ color: '#cbdbe6', marginTop: 6 }}>
                <strong>B.Tech in Computer Science Engineering – Artificial Intelligence & Data Science</strong><br />
                Parul University — Vadodara, Gujarat<br />
                <span style={{ color: '#9fb7c9' }}>June 2023 – May 2027</span>
              </div>
              <div style={{ color: '#cbdbe6', marginTop: 8 }}>
                <strong>12th Board</strong> — Sanskarirth Gyanpeeth Vidhyalaya (Gujarat Board), 2023 — 59.84%
              </div>
              <div style={{ color: '#cbdbe6', marginTop: 8 }}>
                <strong>10th Board</strong> — Sanskarirth Gyanpeeth Vidhyalaya (Gujarat Board), 2021 — 61.66%
              </div>
            </div>
          </div>

          <div>
            <div className="summary-box">
              <h4 style={{ marginTop: 0 }}>Professional Summary</h4>
              <div style={{ color: '#cbdbe6', lineHeight: 1.6 }}>
                Highly motivated and detail-oriented Computer Science student with a strong interest in Artificial Intelligence and Machine Learning. Skilled in Python, data preprocessing, and model development using frameworks like TensorFlow and Scikit-Learn. Familiar with deploying ML models using Flask and Docker, and version control practices with Git/GitHub. Passionate about learning new technologies and applying data-driven solutions to solve real-world challenges.
              </div>
            </div>

            <div style={{ marginTop: 16 }} className="resume-section">
              <h4>Projects</h4>
              <ul>
                <li style={{ color: '#cbdbe6' }}><strong>Customer Churn Prediction</strong> — Python, Scikit-Learn, Pandas, Matplotlib. <a href="https://github.com/Sahilghevariya" target="_blank" rel="noreferrer">GitHub</a>
                  <ul style={{ color: '#cbdbe6' }}>
                    <li>Developed ML models to predict customer churn using classification algorithms (Logistic Regression, Random Forest, XGBoost).</li>
                    <li>Performed extensive data preprocessing and feature engineering; achieved ~86% accuracy on test data after tuning.</li>
                  </ul>
                </li>
                <li style={{ color: '#cbdbe6' }}><strong>House Price Prediction</strong> — Python, Scikit-Learn, Pandas, Matplotlib. <a href="https://github.com/Sahilghevariya" target="_blank" rel="noreferrer">GitHub</a>
                  <ul style={{ color: '#cbdbe6' }}>
                    <li>Built regression models to predict housing prices; handled feature engineering and model comparison (Linear Regression, Random Forest).</li>
                  </ul>
                </li>
                <li style={{ color: '#cbdbe6' }}><strong>Titanic Survival Prediction</strong> — Python, Scikit-Learn. <a href="https://github.com/Sahilghevariya" target="_blank" rel="noreferrer">GitHub</a>
                  <ul style={{ color: '#cbdbe6' }}>
                    <li>Implemented data cleaning, feature selection, and model evaluation to predict passenger survival; compared Logistic Regression and Decision Tree models.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: 16 }}>
              <h4>Skills</h4>
              <div className="skills-tags">
                <span>Python</span>
                <span>C</span>
                <span>Java</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Scikit-learn</span>
                <span>TensorFlow</span>
                <span>PyTorch</span>
                <span>Hugging Face</span>
                <span>Docker</span>
                <span>MLflow</span>
                <span>PostgreSQL</span>
                <span>Tableau</span>
                <span>Power BI</span>
              </div>
            </div>
          </div>
        </div>

            <div className="resume-section" style={{ marginTop: 16 }}>
              <h4>Experience</h4>
              <ul>
                <li>
                  <strong>OutriX — AI/ML Intern (Remote)</strong>
                  <div style={{ color: '#9fb7c9', float: 'right' }}>Aug 2025 – Sep 2025</div>
                  <div style={{ clear: 'both', color: '#cbdbe6', marginTop: 8 }}>
                    Completed a 1-month remote internship as an AI/ML Intern at OutriX, gaining hands-on experience in machine learning workflows and practical model development.
                  </div>
                </li>
              </ul>
            </div>

            

            <div className="pdf-wrapper">
              <iframe className="pdf-frame" src="/resume.pdf" title="Resume PDF"></iframe>
              <div className="download-row">
                <a className="resume-download" href="/resume.pdf" download>⬇️ Download Resume</a>
              </div>
            </div>
      </motion.div>
    </section>
  );
}

