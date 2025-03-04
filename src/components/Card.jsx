import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Card.css';

function Card({ title, imageUrl, description, onButtonClick, link }) {
  return (
    <div className="card">
      <Helmet>
        <title>{title} - Learn More</title>
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={link} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      <img src={imageUrl} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="card-button" onClick={onButtonClick}>Click Me</button>
    </div>
  );
}

export default Card;
