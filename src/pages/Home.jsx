import Hero from '../components/home/Hero';
import AboutDoctor from '../components/home/AboutDoctor';
import Achievements from '../components/home/Achievements';
import Services from '../components/home/Services';
import AppointmentForm from '../components/home/AppointmentForm';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';
import FAQ from '../components/home/FAQ';
import Contact from '../components/home/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutDoctor />
      <Achievements />
      <Services />
      <AppointmentForm />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
