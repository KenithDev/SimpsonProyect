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
      <main className="pt-24 md:pt-28">
        <HeroSection />
        <CardsSection />
        <ChatbotSection />
      </main>
      <footer className="bg-(--simpsons-yellow) text-(--simpsons-text) text-center py-6 px-4 
                         border-t-6 border-(--simpsons-border) shadow-inner">
        <p className="font-simpsons text-lg mb-2">
           Donutmind - Tu compañero para encontrar episodios de Los Simpsons
        </p>
        <p className="text-sm opacity-70">
          DonutMind puede cometer errores. Siempre verifica la información importante.
        </p>
      </footer>
    </div>
  );
};

export default HomePageTemplate;