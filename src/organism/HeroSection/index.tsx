import React from 'react';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image';
import donut from '../../assets/images/donut.png'; // Asegúrate que esta ruta es correcta

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="bg-(--simpsons-teal-bg) min-h-screen flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="mb-8 animate-float">
        <Image src={donut} alt="Dona de Los Simpsons" className="w-48 md:w-64 h-auto drop-shadow-2xl" />
      </div>
      <div className="z-10">
        <Text as="h1" className="text-6xl md:text-7xl font-simpsons text-(--simpsons-white) drop-shadow-lg">
          QUÉ VEMOS HOY?
        </Text>
        <Text as="p" className="text-xl text-(--simpsons-text) mt-4">
          Bienvenido a <span className="font-simpsons text-2xl text-(--simpsons-yellow)">DONUTMIND</span>
        </Text>
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
