
import { Button } from "./ui/button";
import { RevealOnScroll } from "./ui/reveal-on-scroll";

const CallToAction = () => {
  return (
    <section className="py-16 bg-food-orange">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <RevealOnScroll>
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Order Delicious Food?
              </h2>
              <p className="text-white/90 max-w-xl">
                Download our app now and get special first-order discount!
              </p>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-food-orange hover:bg-gray-100">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.707,12.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l3.999,3.999c0.391,0.391,1.023,0.391,1.414,0s0.391-1.023,0-1.414L17.707,12.293z"></path>
                  <path d="M21.707,6.293l-9.999-6c-0.57-0.342-1.277-0.342-1.847,0l-9.999,6C0.316,6.656,0,7.308,0,8v8c0,0.692,0.316,1.344,0.862,1.707l9.999,6c0.285,0.171,0.603,0.257,0.921,0.257s0.636-0.086,0.921-0.257l9.999-6c0.546-0.363,0.862-1.015,0.862-1.707V8C22.569,7.308,22.253,6.656,21.707,6.293z M11.035,17.829L3.862,13.93C3.316,13.567,3,12.915,3,12.223v-6.89l8.035,4.83V17.829z M12,8.175l-8.035-4.83l8.035-4.82l8.035,4.82L12,8.175z M20.138,13.223c0,0.692-0.316,1.344-0.862,1.707l-7.173,3.899v-7.665l8.035-4.83V13.223z"></path>
                </svg>
                Play Store
              </Button>
              <Button className="bg-white text-food-orange hover:bg-gray-100">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.8,5.1L8.2,1.5C7.7,1.2,7.1,1.3,6.7,1.5C6.3,1.8,6,2.3,6,2.7v16.5c0,0.5,0.3,1,0.7,1.3c0.2,0.1,0.4,0.2,0.7,0.2c0.3,0,0.5-0.1,0.8-0.2l6.6-3.6c0.5-0.3,0.8-0.8,0.8-1.3V6.4C15.6,5.9,15.3,5.4,14.8,5.1z"></path>
                  <path d="M8.4,0.5L16.7,5c0.6,0.3,1.3-0.1,1.3-0.8c0-0.4-0.2-0.8-0.6-0.9l-8.3-4.5c-0.5-0.3-1.1,0.1-1.1,0.7C7.9,0,8.1,0.3,8.4,0.5z"></path>
                  <path d="M16.7,17L8.4,21.5c-0.3,0.2-0.5,0.5-0.5,0.9c0,0.6,0.6,1,1.1,0.7l8.3-4.5c0.4-0.2,0.6-0.5,0.6-0.9C18,16.9,17.3,16.6,16.7,17z"></path>
                  <path d="M17.6,7.1l-7.8,4.9c-0.3,0.2-0.4,0.5-0.4,0.9c0,0.6,0.7,1,1.2,0.7l7.8-4.9c0.3-0.2,0.5-0.5,0.5-0.9C18.8,7.2,18.2,6.8,17.6,7.1z"></path>
                </svg>
                App Store
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
