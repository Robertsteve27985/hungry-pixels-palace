
import { useState } from "react";
import { RevealOnScroll } from "./ui/reveal-on-scroll";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    comment: "The best food delivery service I've ever used! The food arrives hot and fresh every time. Their burger selection is amazing!",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Food Enthusiast",
    comment: "I love the variety of options they offer. The pizzas are authentic and the delivery is always on time. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Wilson",
    role: "Office Manager",
    comment: "We use TastyBites for all our office catering. The food is consistently excellent and the ordering process is seamless.",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    rating: 4
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Weekend Foodie",
    comment: "Their special weekend offers are unbeatable. The family meal deals are perfect for our Sunday gatherings!",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-food-light">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-food-dark mb-4">
              What Our <span className="text-food-orange">Customers</span> Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it, hear what our satisfied customers have to share about their experiences
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0 mx-auto md:mx-0">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-food-orange"
                        />
                      </div>
                      <div className="flex-grow text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start mb-2">
                          {[...Array(5)].map((_, index) => (
                            <span 
                              key={index}
                              className={`text-xl ${
                                index < testimonial.rating ? "text-yellow-500" : "text-gray-300"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <blockquote className="text-gray-700 italic mb-4">
                          "{testimonial.comment}"
                        </blockquote>
                        <div>
                          <h4 className="font-bold text-food-dark">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-2">
            <button
              onClick={handlePrev}
              className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-food-orange hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-food-orange hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === activeIndex ? "bg-food-orange" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
