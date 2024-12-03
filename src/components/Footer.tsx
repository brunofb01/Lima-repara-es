import React from 'react';

export function Footer() {
  return (
    <footer className="bg-red-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lima Reparações</h3>
            <p className="text-gray-300">
              Serviços profissionais de canalização em Lisboa e arredores.
              Disponível 24/7 para emergências.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Desentupimentos</li>
              <li>Reparações de Canalização</li>
              <li>Instalação de Equipamentos</li>
              <li>Detecção de Fugas</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contactos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Tel: 935 502 433</li>
              <li>Email: geral@limareparacoes.pt</li>
              <li>Lisboa e arredores</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-red-700 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Lima Reparações. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
