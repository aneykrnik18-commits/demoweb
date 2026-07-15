import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', aspect: 'aspect-[4/3]' },
  { id: 2, src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', aspect: 'aspect-square' },
  { id: 3, src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', aspect: 'aspect-[3/4]' },
  { id: 4, src: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', aspect: 'aspect-[4/3]' },
  { id: 5, src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', aspect: 'aspect-[3/4]' },
  { id: 6, src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', aspect: 'aspect-square' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-24 relative" id="gallery">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          subtitle="Smile Gallery" 
          title="Transformations" 
          description="See the beautiful results we've achieved for our patients."
        />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mt-12">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <div 
                className={`relative rounded-2xl overflow-hidden glass-panel group cursor-pointer border border-white/10 ${img.aspect}`}
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt="Gallery" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-cyan/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ZoomIn size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-deep-navy/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Gallery Full" 
              className="max-w-full max-h-full rounded-2xl shadow-glow"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
