import React, { useState } from "react";
import { db } from "../firebase"; // adjust the path if needed
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const linkStyle = {
  color: "black",
  textDecoration: "none",
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp(),
      });

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Error sending message. Try again!");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">I'm always open to discussing ML projects or opportunities</p>
        </div>

        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Send Message
            </button>
            {status && <p style={{ marginTop: "10px", textAlign: "center" }}>{status}</p>}
          </form>

          <div className="contact-info">
            <div className="contact-item">
              <h4>Email <i className="fa-solid fa-envelope"></i></h4>
              <p>deepanshukashyap531@gmail.com</p>
            </div>
            <div className="contact-item">
              <h4>LinkedIn <i className="fa-brands fa-linkedin"></i></h4>
              <p>
                <a href="https://www.linkedin.com/in/deepanshu577" style={linkStyle} target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/deepanshu577
                </a>
              </p>
            </div>
            <div className="contact-item">
              <h4>GitHub <i className="fa-brands fa-github"></i></h4>
              <p>
                <a href="https://github.com/DeepanshuKashyap531" style={linkStyle} target="_blank" rel="noopener noreferrer">
                  github.com/DeepanshuKashyap531
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
