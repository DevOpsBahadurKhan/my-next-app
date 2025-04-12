import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Sample data
const funFacts = [
  { label: "Appointments Booked", value: 5000, suffix: "+" },
  { label: "Expert Doctors", value: 50, suffix: "+" },
  { label: "Patients Served", value: 10000, suffix: "+" },
  { label: "Years of Service", value: 10, suffix: "+" },
];

// Counter component
const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default function FunFacts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-blue-600">
                <Counter end={fact.value} suffix={fact.suffix} />
              </h3>
              <p className="text-gray-600 mt-2">{fact.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}