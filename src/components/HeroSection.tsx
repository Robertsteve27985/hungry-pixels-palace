
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-food-light pt-16"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070')] bg-cover bg-center bg-no-repeat opacity-20"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <RevealOnScroll delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-food-dark mb-6">
                Delicious Food,
                <br />
                <span className="text-food-orange">Delivered</span> To You
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={400}>
              <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
                Experience the finest cuisine from top local restaurants 
                delivered right to your doorstep. Fast, fresh, and flavorful.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={600}>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  className="bg-food-orange hover:bg-food-red text-white rounded-full px-8 py-6 text-lg"
                >
                  Order Now
                </Button>
                <Button
                  variant="outline"
                  className="border-food-orange text-food-orange hover:bg-food-orange/10 rounded-full px-8 py-6 text-lg"
                >
                  View Menu
                </Button>
              </div>
            </RevealOnScroll>
          </div>
          
          {/* Right Column - Image */}
          <div className="w-full md:w-1/2 relative">
            <RevealOnScroll delay={300} className="relative">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981"
                alt="Delicious burger"
                className="rounded-2xl shadow-2xl mx-auto animate-float transform rotate-3 max-w-sm md:max-w-md lg:max-w-lg"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 bg-food-accent p-4 rounded-full shadow-lg transform rotate-12 animate-pulse">
                <p className="font-bold text-food-red">20% OFF</p>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <p className="text-sm font-medium">Free Delivery</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
