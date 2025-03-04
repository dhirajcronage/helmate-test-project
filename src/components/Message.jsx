import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import './Message.css'; 

function Message() {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, message } = location.state || {};

  // Default image for sharing if no fruit is selected
  const imageMap = {
    "Orange": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Oranges_-_whole-halved-segment.jpg",
    "Apple": "https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg",
    "Mango": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Carabao_mangoes_%28Philippines%29.jpg/640px-Carabao_mangoes_%28Philippines%29.jpg",
    "Banana": "https://organicmandya.com/cdn/shop/files/BananaPachabale.jpg?v=1721369894&width=1500"
  };

  return (
    <div className="message-container">
      <Helmet>
        <title>{title} - Learn More</title>
        <meta name="description" content={message} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={message} />
        <meta property="og:image" content={imageMap[title] || 'https://example.com/default-image.jpg'} />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={message} />
        <meta name="twitter:image" content={imageMap[title] || 'https://example.com/default-image.jpg'} />
      </Helmet>

      <h1>{title} Page</h1>
      <p>{message}</p>
      <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default Message;
