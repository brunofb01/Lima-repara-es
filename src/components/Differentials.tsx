import React from 'react';
import { Shield, Clock, Award, Timer, Coins, HeartHandshake, Users } from 'lucide-react';

const differentials = [
  {
    icon: Shield,
    title: "Garantia total",
    description: "Garantimos todos os serviços que realizamos, assegurando a resolução completa dos seus problemas, sem preocupações!"
  },
  {
    icon: Clock,
    title: "Qualidade e agilidade",
    description: "Atendemos 24 horas por dia e oferecemos suporte no mesmo dia, com profissionais experientes e materiais de alta qualidade."
  },
  {
    icon: Award,
    title: "Mais de 23 anos de experiência",
    description: "Conte com a nossa expertise. Há mais de duas décadas, temos o orgulho de atender a comunidade de Lisboa com excelência."
  },
  {
    icon: Timer,
    title: "Pontualidade acima de tudo",
    description: "Respeitamos o seu tempo! Cumprimos rigorosamente os horários combinados para proporcionar praticidade e eficiência."
  },
  {
    icon: Coins,
    title: "Preços justos e acessíveis",
    description: "Oferecemos valores competitivos sem abrir mão da qualidade que você merece."
  },
  {
    icon: HeartHandshake,
    title: "Suporte após o serviço",
    description: "Nosso compromisso vai além da entrega: estamos sempre disponíveis para oferecer suporte pós-venda quando necessário."
  },
  {
    icon: Users,
    title: "Equipe profissional e dedicada",
    description: "Nossos especialistas são altamente capacitados e focados em oferecer um atendimento de excelência, garantindo resultados incríveis."
  }
];

export function Differentials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-4">
          O único lugar onde você encontra
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          qualidade, garantia e preços que cabem no seu bolso!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <item.icon className="text-red-600 w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}