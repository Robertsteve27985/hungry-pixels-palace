
import { RevealOnScroll } from "./ui/reveal-on-scroll";

const steps = [
  {
    title: "Select Food",
    description: "Browse our menu and select your favorite Asian dishes",
    icon: "👆"
  },
  {
    title: "Customization",
    description: "Customize your meal with special requests and spice levels",
    icon: "🥢"
  },
  {
    title: "Placement",
    description: "Place your order and proceed to secure payment",
    icon: "💬"
  },
  {
    title: "Delivery/Pickup",
    description: "Choose between convenient delivery or quick pickup",
    icon: "🚚"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-food-dark mb-4">
              How You Can <span className="text-food-orange">Order</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <RevealOnScroll key={index} delay={index * 150}>
              <div className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="text-5xl mb-4">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-food-dark mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
