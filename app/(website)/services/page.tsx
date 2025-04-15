import {
  FaBone,
  FaRunning,
  FaChild,
  FaWheelchair,
  FaAmbulance,
  FaProcedures,
} from 'react-icons/fa';

export default function ServicesPage() {
  const services = [
    { title: "Joint Replacement", icon: <FaBone className="text-blue-600 text-4xl mb-3" /> },
    { title: "Sports Medicine", icon: <FaRunning className="text-green-600 text-4xl mb-3" /> },
    { title: "Spine Care", icon: <FaWheelchair className="text-purple-600 text-4xl mb-3" /> },
    { title: "Pediatric Orthopedics", icon: <FaChild className="text-pink-500 text-4xl mb-3" /> },
    { title: "Physical Therapy", icon: <FaProcedures className="text-orange-500 text-4xl mb-3" /> },
    { title: "Trauma & Emergency Care", icon: <FaAmbulance className="text-red-600 text-4xl mb-3" /> },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Our Specialized Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700">{service.title}</h3>
              <p className="text-sm text-gray-500 mt-2">Expert care with modern facilities and a patient-first approach.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
