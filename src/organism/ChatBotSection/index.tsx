import React from 'react';
import Button from '../../atoms/Button';

const ChatbotSection: React.FC = () => {
  return (
    <section id="chatbot" className="bg-(--simpsons-teal-bg) p-12 text-center flex flex-col items-center">
      <div className="bg-(--simpsons-yellow) p-8 rounded-2xl shadow-xl w-full max-w-2xl border-4 border-(--simpsons-text)">
        <div className="bg-(--simpsons-white)/80 h-64 rounded-md mb-6 p-4 text-left text-(--simpsons-text)">
          Ventana de Conversación...
        </div>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Recuerda esa escena..."
            className="grow p-4 rounded-lg bg-(--simpsons-white) text-(--simpsons-text) focus:outline-none focus:ring-4 focus:ring-(--simpsons-blue)"
          />
          <Button onClick={() => alert('Mensaje enviado!')} variant="primary">
            Enviar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;