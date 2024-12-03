import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "João Silva",
    location: "Lisboa",
    text: "Excelente serviço! Resolveram o problema de canalização rapidamente e com profissionalismo.",
    rating: 5
  },
  {
    name: "Maria Santos",
    location: "Amadora",
    text: "Muito satisfeita com o atendimento. Preço justo e trabalho de qualidade.",
    rating: 5
  },
  {
    name: "Pedro Costa",
    location: "Sintra",
    text: "Serviço rápido e eficiente. Recomendo fortemente!",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
          O que dizem nossos clientes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <Quote className="text-red-500 w-10 h-10 mb-4" />
              <p className="text-gray-600 mb-4 italic">{testimonial.text}</p>
              <div className="flex items-center gap-2 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current w-5 h-5" />
                ))}
              </div>
              <div className="mt-4 border-t pt-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}