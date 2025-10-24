import React from 'react';
import Header from '../../organism/header';
import HeroSection from '../../organism/heroSection';
import CardsSection from '../../organism/cardSection';
import ChatbotSection from '../../organism/chatBotSection';
import Footer from '../../molecules/footer';

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
        <Footer />
      </main>

    </div>
  );
};

export default HomePageTemplate;