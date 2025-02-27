import React from 'react';
import { Helmet } from 'react-helmet-async';

function AboutUs() {
  return (
    <div>
      <Helmet>
        <title>About Us - Our Team</title>
        <meta name="description" content="Learn more about our passionate team and our mission." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us - Our Team" />
        <meta property="og:description" content="Learn more about our passionate team and our mission." />
        <meta property="og:image" content="https://example.com/about-us-image.jpg" />
        <meta property="og:url" content={window.location.href} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Our Team" />
        <meta name="twitter:description" content="Learn more about our passionate team and our mission." />
        <meta name="twitter:image" content="https://example.com/about-us-image.jpg" />
      </Helmet>

      <h1>About Us</h1>
      <p>We are a small team of passionate developers working on exciting projects.</p>
    </div>
  );
}

export default AboutUs;
