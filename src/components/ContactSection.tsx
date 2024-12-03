import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          Contacte-nos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Phone size={32} className="text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Telefone</h3>
            <p className="text-gray-600"> 935 502 433</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Mail size={32} className="text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">geral@limareparacoes.pt</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <MapPin size={32} className="text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Localização</h3>
            <p className="text-gray-600 text-center">Lisboa e arredores</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Clock size={32} className="text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Horário</h3>
            <p className="text-gray-600 text-center">
              24/7 Serviço de Urgência
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
