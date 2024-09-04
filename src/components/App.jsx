import { useState } from 'react';
import Panel from './Panel.jsx';
import cards from '../cardsData.js';

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
      {cards.map((card, index) => (
        <Panel
          key={index}
          title={card.title}
          imgUrl={card.imgUrl}
          onClick={handleCardClick}
        />
      ))}
    </main>
  );
}
