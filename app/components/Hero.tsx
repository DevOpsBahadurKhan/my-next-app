import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center h-[80vh] bg-gradient-to-r from-blue-600 to-teal-500 text-white"
      style={{
        backgroundImage: "url('/hospital-bg.jpg')", // Replace with your image
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to HealthCare</h1>
        <p className="text-lg md:text-xl mb-6">
          Book your hospital appointments with ease and trust.
        </p>
        <a
          href="/book-appointment"
          className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
        >
          Book Appointment Now
        </a>
      </motion.div>
    </section>
  );
}