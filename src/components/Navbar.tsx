
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-food-orange">
            TastyBites
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-food-dark font-medium hover:text-food-orange transition-colors"
          >
            Home
          </a>
          <a
            href="#menu"
            className="text-food-dark font-medium hover:text-food-orange transition-colors"
          >
            Menu
          </a>
          <a
            href="#how-it-works"
            className="text-food-dark font-medium hover:text-food-orange transition-colors"
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-food-dark font-medium hover:text-food-orange transition-colors"
          >
            Testimonials
          </a>
        </nav>

        {/* CTA Button */}
        <Button
          variant="default"
          className="hidden md:inline-flex bg-food-orange hover:bg-food-red transition-colors"
        >
          Order Now
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-food-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#home"
              className="text-food-dark font-medium hover:text-food-orange transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#menu"
              className="text-food-dark font-medium hover:text-food-orange transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </a>
            <a
              href="#how-it-works"
              className="text-food-dark font-medium hover:text-food-orange transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-food-dark font-medium hover:text-food-orange transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button
              variant="default"
              className="bg-food-orange hover:bg-food-red transition-colors w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Order Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
