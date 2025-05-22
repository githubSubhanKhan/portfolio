import { Link } from "react-router-dom";
import image from "../components/images/Professional_Profile_Pic.jpg";
import { ExternalLink, MoveUpRight } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import { Button } from "@/components/ui/button";


const HeroSection = () => {
  return (
    <section id="hero-section" className="relative w-full min-h-screen flex items-center overflow-hidden pt-3">
      <div className="container mx-auto px-4 relative z-10 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center lg:items-stretch justify-between">
          {/* Left Content - Text */}
          <div className="w-full md:w-5/12 lg:w-5/12 mb-12 md:mb-0 text-left">
            <h3 className="text-primary font-semibold text-xl mb-2">
              Hello world!
            </h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 whitespace-pre-line">
              <TypeAnimation
                sequence={[
                  "I'm Muhammad\nSubhan Khan",
                  2000,
                  '',
                  500,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </h1>
            <p className="text-black mb-8 max-w-md">
              Building intuitive digital experiences where design meets intelligence. From dynamic web apps to AI-powered features, I turn bold ideas into real-world solutions. Passionate about solving problems that matter—with speed, style, and smart code. Ready to create something users can't ignore?
            </p>
            <div className="flex items-center">
              <Button
                asChild
                className="text-white hover:bg-transparent hover:text-black hover:scale-105 transition-all duration-300 px-6 py-3 gap-2"
              >
                <a href="/subhan_resume_2025.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Browser Window with Image */}
          <div className="w-full md:w-6/12 lg:w-6/12 flex items-center justify-start relative">
            {/* Browser window mockup */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md">
              {/* Browser toolbar */}
              <div className="bg-bluecustom px-4 py-2 flex items-center border-b">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-6 bg-white rounded-md w-full flex items-center justify-center text-xs text-black">
                    subhan-khan-portfolio.vercel.app
                  </div>
                </div>
              </div>

              {/* Browser content */}
              <div className="p-4 bg-bluecustom">
                <div className="relative">
                  {/* Profile picture */}
                  <img
                    src={image}
                    alt="Connor Hamilton"
                    className="w-full h-auto rounded-md"
                  />

                  {/* Role badge */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-bluecustom px-6 py-2 rounded-full shadow-md text-black font-medium whitespace-nowrap text-sm sm:text-base">
                    Software Developer
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