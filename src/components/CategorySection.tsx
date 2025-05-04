
import { RevealOnScroll } from "./ui/reveal-on-scroll";

const categories = [
  {
    name: "Burgers",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072",
    count: "12+ Items"
  },
  {
    name: "Pizza",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=2070",
    count: "8+ Items"
  },
  {
    name: "Salads",
    image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1780",
    count: "6+ Items"
  },
  {
    name: "Desserts",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887",
    count: "10+ Items"
  }
];

const CategorySection = () => {
  return (
    <section id="menu" className="section-padding bg-food-light">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-food-dark mb-4">
              Explore Our <span className="text-food-orange">Menu Categories</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our wide range of delicious options, from savory mains to 
              sweet treats. There's something for everyone to enjoy!
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <RevealOnScroll key={category.name} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-xl shadow-lg h-64 cursor-pointer">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-food-orange transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-300">{category.count}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
