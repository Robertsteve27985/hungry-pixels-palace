
import { ParallaxSection } from "./ui/parallax-section";
import { RevealOnScroll } from "./ui/reveal-on-scroll";

const steps = [
  {
    number: "01",
    title: "Browse Menu",
    description: "Explore our diverse menu offerings and find your favorites",
    icon: "📱"
  },
  {
    number: "02",
    title: "Place Your Order",
    description: "Customize your meal and add items to your cart",
    icon: "🛒"
  },
  {
    number: "03",
    title: "Payment",
    description: "Securely pay online or choose cash on delivery",
    icon: "💳"
  },
  {
    number: "04",
    title: "Enjoy Your Food",
    description: "We'll prepare and deliver your food right to your doorstep",
    icon: "🍔"
  }
];

const HowItWorks = () => {
  return (
    <ParallaxSection
      id="how-it-works"
      bgImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974"
      overlay={true}
      className="py-20"
    >
      <div className="container mx-auto px-4 relative z-30">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It <span className="text-food-orange">Works</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Ordering your favorite food has never been easier. Follow these simple steps!
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <RevealOnScroll key={index} delay={index * 150}>
              <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center group hover:bg-white/20 transition-colors">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-food-orange flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
                <div className="text-5xl mb-4 mt-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Connecting Lines (visible on larger screens) */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/20 z-10" />
      </div>
    </ParallaxSection>
  );
};

export default HowItWorks;
