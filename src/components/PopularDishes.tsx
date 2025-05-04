
import { useState } from "react";
import { Button } from "./ui/button";
import { RevealOnScroll } from "./ui/reveal-on-scroll";

const dishes = [
  {
    id: 1,
    name: "Shrimp Fried Rice",
    description: "Stir-fried rice with shrimp, vegetables, and our special sauce",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=2069",
    category: "rice",
    rating: 4.8
  },
  {
    id: 2,
    name: "Pork Katsu Rice Bowl",
    description: "Crispy pork cutlet served over steamed rice with tonkatsu sauce",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?q=80&w=1964",
    category: "rice",
    rating: 4.7
  },
  {
    id: 3,
    name: "Spicy Ramen",
    description: "Rich broth with noodles, soft-boiled egg, pork belly and vegetables",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=2080",
    category: "noodles",
    rating: 4.9
  },
  {
    id: 4,
    name: "Beef Bulgogi Rice Bowl",
    description: "Marinated beef with vegetables served over steaming rice",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1584278860047-22db7e1c22b0?q=80&w=1915",
    category: "rice",
    rating: 4.6
  },
  {
    id: 5,
    name: "Vegetable Pad Thai",
    description: "Stir-fried rice noodles with tofu, bean sprouts and crushed peanuts",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?q=80&w=2070",
    category: "noodles",
    rating: 4.5
  },
  {
    id: 6,
    name: "Chicken Teriyaki",
    description: "Grilled chicken glazed with sweet teriyaki sauce over rice",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?q=80&w=2070",
    category: "rice",
    rating: 4.7
  },
  {
    id: 7,
    name: "Shrimp Tempura",
    description: "Crispy battered shrimp served with tempura sauce",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1619683548343-47fd0a7f7afb?q=80&w=1974",
    category: "appetizers",
    rating: 4.8
  },
  {
    id: 8,
    name: "Kimchi Fried Rice",
    description: "Spicy kimchi fried rice with egg and vegetables",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1590330813083-fc22d4b6a48c?q=80&w=1974",
    category: "rice",
    rating: 4.6
  }
];

const categories = ["all", "rice", "noodles", "appetizers"];

const PopularDishes = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredDishes = activeCategory === "all" 
    ? dishes 
    : dishes.filter(dish => dish.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-food-dark mb-4">
              Popular <span className="text-food-orange">Food</span>
            </h2>
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
                    ? "bg-yellow-500 hover:bg-yellow-600 text-black" 
                    : "text-food-dark border-yellow-500 text-yellow-600 hover:bg-yellow-100"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDishes.map((dish, index) => (
            <RevealOnScroll key={dish.id} delay={index * 100}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group relative">
                {/* Dish Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 text-yellow-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                
                {/* Dish Info */}
                <div className="p-4">
                  <h3 className="text-base font-medium text-food-dark">{dish.name}</h3>
                  <p className="text-gray-500 text-xs mb-3 line-clamp-2 h-8">{dish.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-500 font-bold">${dish.price.toFixed(2)}</span>
                    <button className="bg-yellow-500 text-black rounded-full w-6 h-6 flex items-center justify-center text-lg">
                      +
                    </button>
                  </div>
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
