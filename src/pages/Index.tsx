
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import PopularDishes from "@/components/PopularDishes";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import SpecialOffer from "@/components/SpecialOffer";
import RestaurantInfo from "@/components/RestaurantInfo";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  // Reveal animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-food-light">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <PopularDishes />
      <SpecialOffer />
      <RestaurantInfo />
      <Testimonials />
      <CallToAction />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
