
import { RevealOnScroll } from "./ui/reveal-on-scroll";

const RestaurantInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-food-dark mb-4">
              <span className="border-b-4 border-yellow-500 pb-2">Place Of Our Restaurant</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <RevealOnScroll delay={200} className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Clean And Comfortable</h3>
            <p className="text-gray-600 mb-6">
              Our restaurant provides a clean, modern atmosphere where you can enjoy authentic Asian cuisine. 
              With comfortable seating, attentive service, and a welcoming ambiance, we've created the perfect 
              setting for a memorable dining experience.
            </p>
            <p className="text-gray-600">
              Located in the heart of the city, we're easily accessible and offer convenient parking. 
              Come visit us today!
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={400} className="w-full lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070" 
                alt="Restaurant interior" 
                className="w-full h-80 object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default RestaurantInfo;
