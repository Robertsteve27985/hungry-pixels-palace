
import { Button } from "./ui/button";
import { RevealOnScroll } from "./ui/reveal-on-scroll";

const SpecialOffer = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-food-dark mb-4">
              <span className="border-b-4 border-yellow-500 pb-2">Special Offer</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <RevealOnScroll delay={200}>
            <div className="w-full lg:w-1/2 relative">
              <div className="bg-gray-200 h-64 w-64 rounded-lg absolute -top-6 -left-6 z-0"></div>
              <div className="bg-gray-300 h-64 w-64 rounded-lg absolute -bottom-6 -right-6 z-0"></div>
              <div className="relative z-10 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=2070" 
                  alt="Special curry dish" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={400} className="w-full lg:w-1/2">
            <h3 className="text-3xl font-bold mb-4">Get 30% Off On Curry</h3>
            <p className="text-gray-600 mb-6">
              Discover the rich flavors of our signature curry dishes, prepared with authentic spices and 
              premium ingredients. For a limited time, enjoy 30% off on all curry meals, whether dining in 
              or ordering for takeout.
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-3">
              Order Now
            </Button>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
