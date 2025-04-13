'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Define types for better type safety
interface Fact {
  label: string;
  value: number;
  suffix: string;
}

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number; // Optional duration for flexibility
}

// Sample data with type
const funFacts: Fact[] = [
  { label: 'Appointments Booked', value: 5000, suffix: '+' },
  { label: 'Expert Doctors', value: 50, suffix: '+' },
  { label: 'Patients Served', value: 10000, suffix: '+' },
  { label: 'Years of Service', value: 10, suffix: '+' },
];

// Counter component with optimized rendering
const Counter = ({ end, suffix, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration / 16); // 60fps for smoother animation
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} aria-live="polite">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function FunFacts() {
  return (
    <section
      className="py-16 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="fun-facts-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="fun-facts-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 tracking-tight"
        >
          Our Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {funFacts.map((fact, index) => (
            <motion.div
              key={fact.label} // Use unique label as key
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.15,
              }}
              className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-3">
                <Counter end={fact.value} suffix={fact.suffix} />
              </h3>
              <p className="text-gray-600 text-base lg:text-lg font-medium">
                {fact.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}