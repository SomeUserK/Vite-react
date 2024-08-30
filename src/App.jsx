import { useState } from 'react';
import Card from './Card.jsx';

export default function App() {
  const [activeCard, setActiveCard] = useState(null);
  const handleCardClick = e => {
    console.log('Card clicked', e.target);

    if (activeCard) {
      activeCard.classList.remove('active');
    }

    if (activeCard === e.target || e.target.classList.contains('title')) {
      setActiveCard(null);
      return;
    }

    e.target.classList.add('active');
    setActiveCard(e.target);
  };

  return (
    <main className="container">
      <Card
        title="Explore The World"
        imgUrl="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        onClick={handleCardClick}
      />
      <Card
        title="Wild Forest"
        imgUrl="https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        onClick={handleCardClick}
      />
      <Card
        title="Sunny Beach"
        imgUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
        onClick={handleCardClick}
      />
      <Card
        title="City on Winter"
        imgUrl="https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        onClick={handleCardClick}
      />
      <Card
        title="Mountains - Clouds"
        imgUrl="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        onClick={handleCardClick}
      />
    </main>
  );
}
