import React from 'react';
import { MapPin } from 'lucide-react';

export function ServiceAreas() {
  const areas = [
    "Lisboa", "Amadora", "Sintra", "Cascais", "Odivelas",
    "Loures", "Alverca", "Vila Franca de Xira", "Margem Sul", "Mafra"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
          Zonas que Actuamos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <MapPin className="text-red-500" />
                <h3 className="text-lg font-semibold">Serviços de canalizador em {area}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}