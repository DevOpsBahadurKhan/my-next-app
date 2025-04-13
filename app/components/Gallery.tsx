'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

// Define types for type safety
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

// Sample image data (replace with your own images)
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/banner1.png',
    alt: 'Hospital reception area',
    caption: 'Welcoming reception area',
  },
  {
    id: 2,
    src: '/images/banner1.png',
    alt: 'Modern operating room',
    caption: 'State-of-the-art operating room',
  },
  {
    id: 3,
    src: '/images/banner1.png',
    alt: 'Patient ward',
    caption: 'Comfortable patient wards',
  },
  {
    id: 4,
    src: '/images/banner1.png',
    alt: 'Diagnostic equipment',
    caption: 'Advanced diagnostic technology',
  },
  {
    id: 5,
    src: '/images/banner1.png',
    alt: 'Diagnostic equipment',
    caption: 'Advanced diagnostic technology',
  },
  
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section
      className="py-16 bg-gray-50"
      aria-labelledby="gallery-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="gallery-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 tracking-tight"
        >
          Our Hospital Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              onClick={() => openLightbox(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                placeholder="blur"
                blurDataURL="/images/placeholder.jpg" // Optional: add a low-res placeholder
              />
              {image.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              onClick={closeLightbox}
              role="dialog"
              aria-labelledby="lightbox-caption"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl w-full mx-4"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
              >
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Close lightbox"
                >
                  <IoClose size={24} />
                </button>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                {selectedImage.caption && (
                  <p
                    id="lightbox-caption"
                    className="text-white text-center mt-4 text-lg font-medium"
                  >
                    {selectedImage.caption}
                  </p>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}