import { Link } from "react-router-dom";
import image from "../components/images/Professional_Profile_Pic.jpg";
import { MoveUpRight } from "lucide-react";
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = { first: "Muhammad", last: "Subhan Khan" };
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingFirstName, setIsTypingFirstName] = useState(true);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [firstName, lastName, isDeleting, isTypingFirstName]);

  const handleTyping = () => {
    // Set typing speed based on action (typing vs deleting)
    setTypingSpeed(isDeleting ? 75 : 150);

    if (isTypingFirstName) {
      // Handle typing the first name
      if (!isDeleting && firstName === fullName.first) {
        // First name complete, move to last name
        setIsTypingFirstName(false);
        return;
      }

      if (isDeleting && firstName === "") {
        // Finished deleting first name, restart cycle
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before retyping
        return;
      }

      // Calculate the next part of first name
      const currentIndex = isDeleting
        ? firstName.length - 1
        : firstName.length;

      const newText = isDeleting
        ? firstName.substring(0, currentIndex)
        : fullName.first.substring(0, currentIndex + 1);

      setFirstName(newText);
    } else {
      // Handle typing the last name
      if (!isDeleting && lastName === fullName.last) {
        // Once we've typed everything, pause then start deleting
        setIsDeleting(true);
        setTypingSpeed(2000); // Pause at the end
        return;
      }

      if (isDeleting && lastName === "") {
        // If last name is deleted, go back to first name
        setIsTypingFirstName(true);
        return;
      }

      // Calculate the next part of last name
      const currentIndex = isDeleting
        ? lastName.length - 1
        : lastName.length;

      const newText = isDeleting
        ? lastName.substring(0, currentIndex)
        : fullName.last.substring(0, currentIndex + 1);

      setLastName(newText);
    }
  };
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-3">
      {/* Background Color - Blue background that covers right portion on desktop */}
      <div className="absolute top-0 right-0 w-1/3 md:w-2/5 h-full bg-blue-600 z-0"></div>


      <div className="container mx-auto px-4 relative z-10 py-12 md:py-20">
        <div className="flex flex-col lg:flex-col md:flex-row items-center lg:items-stretch justify-between">
          {/* Left Content - Text */}
          <div className="w-full lg:w-5/12 mb-12 lg:mb-0 text-left">
            <h3 className="text-primary font-semibold text-xl mb-2">
              Hello world!
            </h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900">
              I'm <span className="inline-block">{firstName}</span>
              {isTypingFirstName && (
                <span className="inline-block w-1 h-8 md:h-10 lg:h-12 bg-neutral-900 ml-1 animate-pulse" />
              )}
              <br />
              <span className="inline-block">{lastName}</span>
              {!isTypingFirstName && (
                <span className="inline-block w-1 h-8 md:h-10 lg:h-12 bg-neutral-900 ml-1 animate-pulse" />
              )}
            </h1>
            <p className="text-neutral-600 mb-8 max-w-md">
              Hello
            </p>
            <div className="flex items-center">
              <Link
                to="/portfolio"
                className="bg-white text-primary border border-primary rounded-full font-medium hover:bg-primary hover:text-white transition-colors px-6 py-1 rounded-full font-medium flex items-center transition-all"
              >
                Get Started
                <span className="ml-2 w-8 h-8 flex items-center justify-center text-sm">
                  <MoveUpRight size={16} />
                </span>
              </Link>
            </div>

          </div>

          {/* Right Content - Browser Window with Image */}
          <div className="w-full lg:w-6/12 flex items-center justify-start relative">

            {/* Browser window mockup */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md">
              {/* Browser toolbar */}
              <div className="bg-gray-100 px-4 py-2 flex items-center border-b">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-6 bg-white rounded-md w-full flex items-center justify-center text-xs text-gray-500">
                    www.connorhamiltom.com
                  </div>
                </div>
              </div>

              {/* Browser content */}
              <div className="p-4 bg-gray-200">
                <div className="relative">
                  {/* Profile picture */}
                  <img
                    src={image}
                    alt="Connor Hamilton"
                    className="w-full h-auto rounded-md"
                  />

                  {/* Role badge */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-pink-100 px-6 py-2 rounded-full shadow-md text-neutral-900 font-medium">
                    Frontend Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;