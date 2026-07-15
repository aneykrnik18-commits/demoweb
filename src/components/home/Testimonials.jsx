import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Star, Quote } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

const testimonials = [
  {
    id: 1,
    name: 'Michael Thompson',
    review: 'The best dental experience I have ever had. The staff is incredibly professional, and the clinic feels more like a luxury spa than a dentist office.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    review: 'Dr. Jenkins completely transformed my smile with veneers. The process was painless, and the results are absolutely stunning. Highly recommend!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    name: 'David Chen',
    review: 'I had severe dental anxiety, but the team here made me feel completely at ease. State-of-the-art equipment and a very gentle approach.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    review: 'My kids actually look forward to going to the dentist now. The environment is so calming and the doctors are fantastic with children.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle 
          subtitle="Success Stories" 
          title="What Our Patients Say" 
        />

        <div className="mt-12">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full max-w-5xl !pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="max-w-md w-full px-4">
                <GlassCard className="relative p-8 pt-12 mt-8 text-center" hover={false}>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-20 h-20 rounded-full border-4 border-deep-navy object-cover"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-cyan flex items-center justify-center text-white">
                        <Quote size={14} className="fill-current" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic mb-6">"{testimonial.review}"</p>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                </GlassCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
