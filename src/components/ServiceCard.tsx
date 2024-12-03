import React from 'react';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export function ServiceCard({ title, description, features, imageUrl }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-red-600 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="bg-red-50 p-4 rounded-lg hover:bg-red-100 transition-colors">
              <div className="flex items-center gap-3">
                <div className="bg-red-600 rounded-full p-1">
                  <Check size={16} className="text-white" />
                </div>
                <span className="font-medium text-gray-800">{feature}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}