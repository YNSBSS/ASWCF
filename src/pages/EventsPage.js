import React from 'react';

const EventsPage = () => {
  const events = [
    { title: 'Beginner Workshop - Algiers', date: 'August 20, 2025', type: 'Workshop', spots: '15 spots left' },
    { title: 'Judge Certification Course', date: 'September 8, 2025', type: 'Certification', spots: '8 spots left' },
    { title: 'National Team Training Camp', date: 'September 25-30, 2025', type: 'Training', spots: 'Invitation only' },
    { title: 'Coach Development Seminar', date: 'October 15, 2025', type: 'Education', spots: 'Registration open' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-6xl font-bold text-gray-800 mb-16 text-center">Events & Workshops</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Upcoming Events</h2>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-md">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{event.type}</span>
                  </div>
                  <div className="text-gray-600 mb-2">{event.date}</div>
                  <div className="text-sm text-gray-500">{event.spots}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Event Registration</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-4 rounded-xl bg-gray-50 border-none shadow-inner focus:ring-2 focus:ring-gray-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-4 rounded-xl bg-gray-50 border-none shadow-inner focus:ring-2 focus:ring-gray-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Experience Level</label>
                <select className="w-full p-4 rounded-xl bg-gray-50 border-none shadow-inner focus:ring-2 focus:ring-gray-300 focus:outline-none">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Elite</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Event Interest</label>
                <select className="w-full p-4 rounded-xl bg-gray-50 border-none shadow-inner focus:ring-2 focus:ring-gray-300 focus:outline-none">
                  <option>Beginner Workshop - Algiers</option>
                  <option>Judge Certification Course</option>
                  <option>Coach Development Seminar</option>
                </select>
              </div>
              <button className="w-full bg-gray-800 text-white py-4 rounded-xl font-medium shadow-lg hover:bg-gray-700 transition-colors">
                Register for Event
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;