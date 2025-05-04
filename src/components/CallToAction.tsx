
import { Button } from "./ui/button";
import { RevealOnScroll } from "./ui/reveal-on-scroll";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Side */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <div className="absolute inset-0 bg-green-600/60"></div>
              <img 
                src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070" 
                alt="Special curry dish" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <RevealOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Get <span className="text-yellow-500">30% Off</span> On Curry
                </h2>
                <p className="text-gray-600 mb-6">
                  Order today and enjoy our special curry dishes with an exclusive discount. Limited time offer!
                </p>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-3">
                  Order Now
                </Button>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
