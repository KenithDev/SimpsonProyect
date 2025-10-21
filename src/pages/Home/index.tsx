import React from 'react';
import HomePageTemplate from '../../templates/HomeTemplate';

const navLinksData = [
  { label: 'Hero', href: 'hero' },
  { label: 'Cards', href: 'cards' },
  { label: 'ChatBot', href: 'chatbot' },
];

const HomePage: React.FC = () => {
  return (
    <HomePageTemplate
      siteTitle="Donutmind"
      navLinks={navLinksData}
    />
  );
};

export default HomePage;