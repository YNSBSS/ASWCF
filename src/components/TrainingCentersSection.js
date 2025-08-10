import React from 'react';
import { ChevronRight } from 'lucide-react';

const TrainingCentersSection = () => {
  const centers = [
    { city: 'Algiers', center: 'Capital Calisthenics Hub', address: 'Bab Ezzouar Sports Complex' },
    { city: 'Oran', center: 'Western Training Center', address: 'Es Senia Athletic Park' },
    { city: 'Constantine', center: 'Eastern Elite Academy', address: 'Zouaghi Sports Center' },
    { city: 'Annaba', center: 'Coastal Training Ground', address: 'Seybouse Sports Complex' },
    { city: 'Setif', center: 'Highland Performance Center', address: 'University Sports Facility' },
    { city: 'Batna', center: 'Atlas Training Base', address: 'Municipal Sports Park' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Training Centers</h2>
          <p className="text-xl text-gray-600">Official training facilities across Algeria</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {centers.map((center, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{center.center}</h3>
              <div className="text-gray-700 font-medium mb-2">{center.city}</div>
              <div className="text-gray-600 text-sm mb-4">{center.address}</div>
              <button className="text-gray-800 font-medium flex items-center space-x-2 hover:space-x-3 transition-all">
                <span>View Details</span>
                <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingCentersSection;