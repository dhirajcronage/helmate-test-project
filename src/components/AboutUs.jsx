import React from 'react';
import { Helmet } from 'react-helmet-async';
import Image from '../assets/helmet-test-img.avif';
import './AboutUs.css'; // Import the CSS file

function AboutUs() {
  return (
    <div className="about-container">
      <Helmet>
        <title>About Us - Our Company</title>
        <meta name="description" content="Learn more about our company, our values, and our mission." />
      </Helmet>

      <h1>About Our Company</h1>
      <p>We are a forward-thinking company dedicated to innovation, excellence, and creating value for our clients worldwide.</p>

      {/* Company Image Section */}
      <img src={Image} alt="Our Company" className="company-image" />

      <h2>Our Mission</h2>
      <p>Our mission is to provide top-notch services and products that drive success for our partners and stakeholders.</p>

      <h2>Our Values</h2>
      <ul className="about-values">
        <li>Integrity & Transparency</li>
        <li>Innovation & Excellence</li>
        <li>Customer Satisfaction</li>
        <li>Commitment to Sustainability</li>
      </ul>

      {/* Team Cards Section */}
      <h2>Meet Our Team</h2>
      <div className="team-cards">
        <div className="card">
          <img src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" alt="Team Member" className="card-image" />
          <h3>John Doe</h3>
          <p>CEO & Founder</p>
        </div>
        <div className="card">
          <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="Team Member" className="card-image" />
          <h3>Jane Smith</h3>
          <p>CTO</p>
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg" alt="Team Member" className="card-image" />
          <h3>Michael Johnson</h3>
          <p>Lead Developer</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;