import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSmoothScroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Navigation links
  const navLinks = [
    { name: "Home", path: "#hero-section" },
    { name: "About Me", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Certifications", path: "#certifications" },
    { name: "Contact Me", path: "#contact-me" }
  ];


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-12 flex items-center transition-all duration-300 bg-white shadow-md"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Website Name */}
          <div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevent URL update
                const section = document.querySelector("#hero-section");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary font-bold text-lg cursor-pointer"
            >
              Portfolio
            </a>

          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                onClick={() => handleSmoothScroll(link.path)}
                className="text-neutral hover:text-primary font-medium transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Always visible */}
          <div className="flex items-center">


            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="ml-4 md:hidden flex items-center justify-center p-2 rounded-md text-neutral hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
            <div className="py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  onClick={() => handleSmoothScroll(link.path)}
                  className="block py-2 px-4 text-neutral hover:bg-primary-light hover:text-primary"
                >
                  {link.name}
                </a>

              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;