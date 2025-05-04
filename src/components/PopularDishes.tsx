
import { useState } from "react";
import { Button } from "./ui/button";
import { RevealOnScroll } from "./ui/reveal-on-scroll";

const dishes = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and our special sauce",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899",
    category: "burgers",
    rating: 4.8
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomatoes, basil leaves, and olive oil on a thin crust",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=2070",
    category: "pizza",
    rating: 4.7
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2070",
    category: "salads",
    rating: 4.5
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1887",
    category: "desserts",
    rating: 4.9
  },
  {
    id: 5,
    name: "Spicy Chicken Sandwich",
    description: "Crispy chicken breast with spicy mayo, pickles, and coleslaw",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1887",
    category: "burgers",
    rating: 4.6
  },
  {
    id: 6,
    name: "Pepperoni Pizza",
    description: "Classic pepperoni with mozzarella cheese and tomato sauce",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1780",
    category: "pizza",
    rating: 4.8
  }
];

const categories = ["all", "burgers", "pizza", "salads", "desserts"];

const PopularDishes = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredDishes = activeCategory === "all" 
    ? dishes 
    : dishes.filter(dish => dish.category === activeCategory);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-food-dark mb-4">
              Our <span className="text-food-orange">Popular</span> Dishes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Try our most loved dishes, crafted with premium ingredients and passion
            </p>
          </div>
        </RevealOnScroll>

        {/* Category Filter */}
        <RevealOnScroll delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`capitalize text-sm md:text-base ${
                  activeCategory === category 
                    ? "bg-food-orange hover:bg-food-red" 
                    : "text-food-dark border-food-orange text-food-orange hover:bg-food-orange/10"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish, index) => (
            <RevealOnScroll key={dish.id} delay={index * 100}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                {/* Dish Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full py-1 px-3 shadow">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium text-sm">{dish.rating}</span>
                    </div>
                  </div>
                </div>
                
                {/* Dish Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-food-dark">{dish.name}</h3>
                    <span className="text-lg font-bold text-food-orange">${dish.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{dish.description}</p>
                  <Button 
                    className="w-full bg-food-orange hover:bg-food-red"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
