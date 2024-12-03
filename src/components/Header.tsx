import React from 'react';
import { Phone, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">Lima Reparações</h1>
          <div className="flex items-center gap-6">
            <a href="tel:+351935502433" className="flex items-center gap-2 hover:text-red-100 transition-colors">
              <Phone size={20} />
              <span>935 502 433</span>
            </a>
            <a href="mailto:geral@limareparacoes.pt" className="flex items-center gap-2 hover:text-red-100 transition-colors">
              <Mail size={20} />
              <span>geral@limareparacoes.pt</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}