import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const faqs = [
  {
    question: 'How often should I visit the dentist?',
    answer: 'We recommend visiting the dentist for a checkup and professional cleaning at least twice a year. However, depending on your oral health needs, we may recommend more frequent visits.'
  },
  {
    question: 'Do you offer emergency dental care?',
    answer: 'Yes, we provide emergency dental services. If you experience severe tooth pain, a knocked-out tooth, or other dental emergencies, please call us immediately so we can arrange prompt care.'
  },
  {
    question: 'What types of payment do you accept?',
    answer: 'We accept most major dental insurance plans, credit cards (Visa, MasterCard, Amex), debit cards, and cash. We also offer flexible financing options to help manage the cost of larger treatments.'
  },
  {
    question: 'Are dental X-rays safe?',
    answer: 'Yes. We use advanced digital X-rays that emit up to 90% less radiation compared to traditional film X-rays. They are very safe and an essential tool for diagnosing issues not visible during a standard exam.'
  },
  {
    question: 'How can I whiten my teeth safely?',
    answer: 'We offer professional in-office whitening treatments and custom take-home kits. These methods are much safer and more effective than over-the-counter products, minimizing sensitivity while maximizing results.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 relative" id="faq">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <SectionTitle 
          subtitle="Common Questions" 
          title="Frequently Asked Questions" 
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white/10 shadow-glass-hover' : 'bg-white/5 hover:bg-white/10'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <h4 className="font-semibold text-white text-lg pr-4">{faq.question}</h4>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === index ? 'bg-cyan text-white rotate-180' : 'bg-white/10 text-gray-400'}`}>
                  <ChevronDown size={18} />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-400">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
