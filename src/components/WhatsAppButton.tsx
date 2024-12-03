import React from 'react';
import { WhatsappIcon } from './Icons';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/351935502433"
      className="fixed bottom-6 right-6 z-50 animate-pulse hover:animate-none"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110">
        <WhatsappIcon className="w-8 h-8" />
      </div>
    </a>
  );
}