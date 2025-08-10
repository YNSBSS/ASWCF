import React from 'react';

const AthletesSection = () => {
  const athletes = [
    { 
      name: 'Ahmed Benali', 
      specialty: 'Static Skills', 
      achievements: 'World Championship Finalist 2024', 
      rank: 'National Champion' 
    },
    { 
      name: 'Yasmine Cherif', 
      specialty: 'Freestyle', 
      achievements: 'African Championship Gold 2024', 
      rank: 'Elite Athlete' 
    },
    { 
      name: 'Karim Mansouri', 
      specialty: 'Endurance', 
      achievements: 'Multiple National Records', 
      rank: 'Record Holder' 
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Featured Athletes</h2>
          <p className="text-xl text-gray-600">Meet the champions representing Algeria on the world stage</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {athletes.map((athlete, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-6 shadow-lg"></div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{athlete.name}</h3>
                <div className="text-gray-600 mb-2">{athlete.specialty}</div>
                <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">{athlete.rank}</div>
                <p className="text-gray-600 text-sm">{athlete.achievements}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AthletesSection;