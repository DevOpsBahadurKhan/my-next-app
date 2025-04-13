import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Dr. Anjali Mehta",
    role: "Orthopedic Surgeon",
    feedback:
      "The appointment system is seamless. My patients love the easy booking process!",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rahul Sharma",
    role: "Patient",
    feedback:
      "I booked my consultation in under 2 minutes. Great experience and amazing doctors!",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    role: "Patient",
    feedback:
      "The UI is clean, and I got reminder notifications on time. Loved it!",
    image:
      "https://randomuser.me/api/portraits/women/43.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Users Say
        </h2>
        <p className="mt-2 text-gray-500">
          Real experiences from doctors and patients.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl shadow-md p-6 relative hover:shadow-xl transition-shadow"
          >
            <FaQuoteLeft className="text-indigo-500 text-3xl absolute -top-5 -left-5 bg-white rounded-full p-2 shadow-md" />
            <p className="text-gray-700 mb-6">{t.feedback}</p>
            <div className="flex items-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
