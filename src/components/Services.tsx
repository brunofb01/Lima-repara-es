import React from 'react';
import { Check } from 'lucide-react';

const services = [
  {
    title: "Reparações Gerais",
    items: [
      "Roturas de canos",
      "Coluna de águas",
      "Desentupimentos",
      "Reparações de canos",
      "Sistemas de esgotos",
      "Autoclismos"
    ]
  },
  {
    title: "Instalações",
    items: [
      "Bombas de Calor",
      "Termoacumuladores",
      "Canalizações",
      "Esgotos",
      "Torneiras",
      "Montagem de loiças"
    ]
  },
  {
    title: "Serviços de Emergência",
    items: [
      "Inundações",
      "Desentupimentos urgentes",
      "Reparações 24/7",
      "Detecção de fugas",
      "Reparações rápidas",
      "Assistência imediata"
    ]
  }
];

export function Services() {
  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
          Nossos Serviços
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-red-600 mb-6">{service.title}</h3>
              <ul className="space-y-4">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-red-50 p-3 rounded-lg hover:bg-red-100 transition-colors">
                    <Check className="text-red-600 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}