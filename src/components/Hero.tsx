import React from 'react';

export function Hero() {
  return (
    <section className="relative text-white min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/ss9bq2x/trabalhador-consertando-aquecedor-de-agua.jpg" 
          alt="Canalizador Profissional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            <span className="block text-red-500">Canalizador 24h em Lisboa e Arredores!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Problemas com fugas de água, infiltrações ou precisa de outro tipo de reparo doméstico? 
            Na Lima Reparações encontra rapidez, qualidade e garantia para resolver os seus problemas!
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="tel:+351935502433"
              className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ligar Agora
            </a>
            <a
              href="https://wa.me/351935502433"
              className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}