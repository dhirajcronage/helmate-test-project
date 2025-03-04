import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Card from './Card'; 
import './Home.css'; 

function Home() {
  const navigate = useNavigate();
  
  const handleButtonClick = (title) => {
    const messages = {
      "Orange": "Welcome! Enjoy the freshness of oranges!",
      "Apple": "Hello! An apple a day keeps the doctor away!",
      "Mango": "Hey there! Mangoes are the king of fruits!",
      "Banana": "Greetings! Bananas are a great source of energy!"
    };

    navigate('/message', { state: { title, message: messages[title] || "Welcome!" } });
  };

  const movieData = [
    { title: "Orange", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Oranges_-_whole-halved-segment.jpg", description: "A group of kids uncover supernatural secrets in their small town.", link: `${window.location.origin}/message?fruit=Orange` },
    { title: "Apple", imageUrl: "https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg", description: "A monster hunter confronts the darkest forces of the world.", link: `${window.location.origin}/message?fruit=Apple` },
    { title: "Mango", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Carabao_mangoes_%28Philippines%29.jpg/640px-Carabao_mangoes_%28Philippines%29.jpg", description: "A criminal mastermind plans a heist on the Royal Mint of Spain.", link: `${window.location.origin}/message?fruit=Mango` },
    { title: "Banana", imageUrl: "https://organicmandya.com/cdn/shop/files/BananaPachabale.jpg?v=1721369894&width=1500", description: "A chronicle of the reign of Queen Elizabeth II.", link: `${window.location.origin}/message?fruit=Banana` }
  ];

  return (
    <div className="home">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Welcome to our website" />
      </Helmet>

      <h1>Welcome to Our Website</h1>
      <p>This is the Home page of our website. Here are some popular fruits:</p>

      <div className="card-container">
        {movieData.map((movie, index) => (
          <Card
            key={index}
            title={movie.title}
            imageUrl={movie.imageUrl}
            description={movie.description}
            link={movie.link}
            onButtonClick={() => handleButtonClick(movie.title)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
