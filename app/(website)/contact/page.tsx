import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Get in Touch</h2>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
        <div className="bg-white shadow-lg p-6 rounded-2xl">
          <FaPhoneAlt className="text-blue-600 text-3xl mx-auto mb-2" />
          <h3 className="text-lg font-semibold">Phone</h3>
          <p className="text-gray-600 mt-1">+91 98765 43210</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-2xl">
          <FaEnvelope className="text-green-600 text-3xl mx-auto mb-2" />
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="text-gray-600 mt-1">contact@boneandjointhospital.com</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-2xl">
          <FaMapMarkerAlt className="text-red-600 text-3xl mx-auto mb-2" />
          <h3 className="text-lg font-semibold">Location</h3>
          <p className="text-gray-600 mt-1">123, Spine Avenue, New Delhi, India</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-xl rounded-2xl p-8 mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Send Us a Message</h3>
        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Hospital Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.395721773687!2d74.64534451121274!3d25.358050725072808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c33e8a5d105b%3A0x6ff7da823f5f469a!2sBone%20and%20Joint%20multispecialty%20Hospital%20(NABH%20certified%20hospital)!5e0!3m2!1sen!2sin!4v1743233829206!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

