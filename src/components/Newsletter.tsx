
import { useState } from "react";
import { Button } from "./ui/button";
import { RevealOnScroll } from "./ui/reveal-on-scroll";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
    // Here you would typically send this to your backend
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-food-dark mb-4">
              Stay <span className="text-food-orange">In Touch</span>
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200} className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3"
            >
              Subscribe
            </Button>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Newsletter;
