
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-food-light pt-16"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <RevealOnScroll delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-food-dark mb-6">
                Happy With <span className="text-food-orange">Delicious</span> Food And Get New <span className="text-food-orange">Experiences</span> With Asian Food
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={400}>
              <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
                Asian ingredients make for the best dishes. Fresh vegetables, meat and seafood, 
                and the perfect spices make for an unforgettable experience.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={600}>
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-md px-8 py-6 text-lg"
              >
                Order Now
              </Button>
            </RevealOnScroll>
          </div>
          
          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2 relative">
            <RevealOnScroll delay={300} className="relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=2070"
                  alt="Delicious Asian noodle soup"
                  className="rounded-full mx-auto w-80 h-80 object-cover border-8 border-yellow-200"
                />
                
                {/* Floating food images */}
                <div className="absolute -top-10 -left-10 bg-white p-2 rounded-full shadow-lg w-24 h-24">
                  <img 
                    src="https://images.unsplash.com/photo-1617622141533-bdbbf97c39c7?q=80&w=1964"
                    alt="Dumplings" 
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute top-1/4 -right-10 bg-white p-2 rounded-full shadow-lg w-28 h-28">
                  <img 
                    src="https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2069"
                    alt="Spring rolls" 
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute bottom-0 -left-5 bg-white p-2 rounded-full shadow-lg w-20 h-20">
                  <img 
                    src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069" 
                    alt="Sushi" 
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-3 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <p className="text-sm font-medium text-black">Free Delivery</p>
                  </div>
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
