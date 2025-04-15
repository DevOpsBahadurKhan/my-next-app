'use client';
import { FaHeartbeat, FaUserNurse, FaHandHoldingHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 tracking-tight mb-4">
            Bone and Joint Multispecialty Hospital
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Transforming lives with advanced orthopedic care, delivered with expertise and empathy.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-300"
            aria-label="Book an appointment with Bone and Joint Hospital"
          >
            Book Appointment
          </a>
        </motion.div>

        {/* Mission / Vision / Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {[
            {
              icon: <FaHeartbeat className="text-blue-600 text-5xl mb-4 mx-auto" />,
              title: "Our Mission",
              description: "To provide world-class orthopedic care with compassion, innovation, and integrity.",
            },
            {
              icon: <FaUserNurse className="text-blue-600 text-5xl mb-4 mx-auto" />,
              title: "Our Vision",
              description: "To be the region’s most trusted destination for bone and joint care.",
            },
            {
              icon: <FaHandHoldingHeart className="text-blue-600 text-5xl mb-4 mx-auto" />,
              title: "Our Values",
              description: "Excellence, empathy, and patient-centered care in everything we do.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 group"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <div className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Hospital Description */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white px-6 py-10 sm:px-10 md:px-16 lg:px-20 xl:px-24 rounded-3xl shadow-xl mx-auto max-w-7xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">
            Who We Are
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6 lg:col-span-6">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 text-justify">
                Bone and Joint Multispecialty Hospital is a premier center of excellence in orthopedic and trauma care,
                committed to restoring mobility and enhancing lives. With a strong foundation of clinical expertise,
                advanced medical technology, and compassionate patient care, we aim to redefine healthcare standards
                in the region.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-6">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 text-justify">
                From complex joint replacements to critical spine treatments and physiotherapy, our multidisciplinary
                team of surgeons, specialists, and therapists work together to deliver personalized care focused on
                rapid recovery and long-term well-being.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-6">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                We don't just treat conditions — we build trust, ensure comfort, and walk with our patients through
                every step of their healing journey.
              </p>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
