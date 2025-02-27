import React from 'react';
import { Helmet } from 'react-helmet-async';
import Card from './Card'; 
import './Home.css'; 

function Home() {
  
  const movieData = [
    {
      title: "Stranger Things",
      imageUrl: "https://m.media-amazon.com/images/I/81pN0PBttjL._AC_SY679_.jpg", 
      description: "A group of kids uncover supernatural secrets in their small town."
    },
    {
      title: "The Witcher",
      imageUrl: "https://m.media-amazon.com/images/I/91Kh8uXZdLL._AC_SY679_.jpg",
      description: "A monster hunter confronts the darkest forces of the world."
    },
    {
      title: "Money Heist",
      imageUrl: "https://m.media-amazon.com/images/I/71AJHcFw85L._AC_SY679_.jpg",
      description: "A criminal mastermind plans a heist on the Royal Mint of Spain."
    },
    {
      title: "The Crown",
      imageUrl: "https://m.media-amazon.com/images/I/91lK9T9KzOL._AC_SY679_.jpg",
      description: "A chronicle of the reign of Queen Elizabeth II."
    }
  ];

  // Assume the first movie is the default preview for social sharing
  const metaTitle = movieData[0].title;
  const metaDescription = movieData[0].description;
  const metaImage = movieData[0].imageUrl;
  const metaUrl = window.location.href;

  return (
    <div className="home">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:url" content={metaUrl} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
      </Helmet>

      <h1>Welcome to Our Website</h1>
      <p>This is the Home page of our website. Here are some popular shows:</p>

      <div className="card-container">
        {movieData.map((movie, index) => (
          <Card
            key={index}
            title={movie.title}
            imageUrl={movie.imageUrl}
            description={movie.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
