import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import GlowButton from '../ui/GlowButton';
import { CheckCircle } from 'lucide-react';
import { useForm as useReactHookForm } from 'react-hook-form';

const AppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useReactHookForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call or EmailJS integration
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan/50 focus:bg-white/10 transition-colors";

  return (
    <section className="py-24 relative overflow-hidden" id="appointment">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative z-10">
            <SectionTitle 
              align="left"
              subtitle="Book Now" 
              title="Request an Appointment" 
              description="Fill out the form below to schedule your consultation. Our team will get back to you within 24 hours to confirm your appointment time."
            />
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan/20 flex items-center justify-center text-cyan">1</div>
                <div>
                  <h4 className="font-bold text-white">Fill the Form</h4>
                  <p className="text-gray-400 text-sm">Provide your details and preferred time.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan/20 flex items-center justify-center text-cyan">2</div>
                <div>
                  <h4 className="font-bold text-white">Confirmation</h4>
                  <p className="text-gray-400 text-sm">We will call or email you to confirm.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan/20 flex items-center justify-center text-cyan">3</div>
                <div>
                  <h4 className="font-bold text-white">Visit Clinic</h4>
                  <p className="text-gray-400 text-sm">Experience premium dental care.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <GlassCard className="relative overflow-hidden" hover={false}>
              
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 bg-deep-navy/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      <CheckCircle className="text-soft-teal w-20 h-20 mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Request Sent!</h3>
                    <p className="text-gray-300">Thank you for requesting an appointment. We will contact you shortly to confirm your booking.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className={inputClasses}
                      {...register("name", { required: true })}
                    />
                    {errors.name && <span className="text-red-400 text-xs mt-1 block">Name is required</span>}
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className={inputClasses}
                      {...register("phone", { required: true })}
                    />
                    {errors.phone && <span className="text-red-400 text-xs mt-1 block">Phone is required</span>}
                  </div>
                </div>

                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className={inputClasses}
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1 block">Valid email is required</span>}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="date" 
                      className={inputClasses}
                      {...register("date", { required: true })}
                    />
                    {errors.date && <span className="text-red-400 text-xs mt-1 block">Date is required</span>}
                  </div>
                  <div>
                    <input 
                      type="time" 
                      className={inputClasses}
                      {...register("time", { required: true })}
                    />
                    {errors.time && <span className="text-red-400 text-xs mt-1 block">Time is required</span>}
                  </div>
                </div>

                <div>
                  <select 
                    className={`${inputClasses} appearance-none`}
                    {...register("treatment", { required: true })}
                  >
                    <option value="" className="text-gray-900">Select Treatment</option>
                    <option value="checkup" className="text-gray-900">Dental Checkup</option>
                    <option value="whitening" className="text-gray-900">Teeth Whitening</option>
                    <option value="implants" className="text-gray-900">Dental Implants</option>
                    <option value="braces" className="text-gray-900">Braces / Orthodontics</option>
                    <option value="other" className="text-gray-900">Other / Consultation</option>
                  </select>
                  {errors.treatment && <span className="text-red-400 text-xs mt-1 block">Treatment selection is required</span>}
                </div>

                <div>
                  <textarea 
                    placeholder="Message or specific requests (Optional)" 
                    rows={4}
                    className={`${inputClasses} resize-none`}
                    {...register("message")}
                  ></textarea>
                </div>

                <GlowButton type="submit" className="w-full" variant="primary">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : "Confirm Appointment"}
                </GlowButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
