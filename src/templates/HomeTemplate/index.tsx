import React from 'react';
import Header from '../../organism/Header';
import HeroSection from '../../organism/HeroSection';
import CardsSection from '../../organism/CardSection';
import ChatbotSection from '../../organism/ChatBotSection';

interface HomePageTemplateProps {
  siteTitle: string;
  navLinks: { label: string; href: string }[];
}

const HomePageTemplate: React.FC<HomePageTemplateProps> = ({
  siteTitle,
  navLinks,
}) => {
  return (
    <div className="min-h-screen font-sans">
      <Header siteTitle={siteTitle} navLinks={navLinks} />
      <main>
        <HeroSection />
        <CardsSection />
        <ChatbotSection />
      </main>
      <footer className="bg-(--simpsons-yellow) text-(--simpsons-text) text-center p-4 font-sans">
        <p>Donutmind puede cometer errores, dale un vistazo a la documentación.</p>
      </footer>
    </div>
  );
};

export default HomePageTemplate;