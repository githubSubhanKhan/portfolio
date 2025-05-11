import { Link } from "react-router-dom";
import image from "../components/images/Professional_Profile_Pic.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Color - Blue background that covers right portion on desktop */}
      <div className="absolute top-0 right-0 w-1/2 md:w-3/5 h-full bg-blue-600 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-12 md:py-20">
        <div className="flex flex-col lg:flex-col md:flex-row items-center lg:items-stretch justify-between">
          {/* Left Content - Text */}
          <div className="w-full lg:w-5/12 mb-12 lg:mb-0 text-left">
            <h3 className="text-blue-600 font-semibold text-xl mb-2">
              Hello world!
            </h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900">
              I'm Muhammad<br /> Subhan Khan
            </h1>
            <p className="text-neutral-600 mb-8 max-w-md">
              Hello
            </p>
            <div className="flex items-center">
              <Link 
                to="/portfolio" 
                className="bg-pink-100 text-neutral-900 px-6 py-3 rounded-full font-medium flex items-center hover:bg-pink-200 transition-all"
              >
                Get Started
                <span className="ml-2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  →
                </span>
              </Link>
            </div>
          </div>
          
          {/* Right Content - Browser Window with Image */}
          <div className="w-full lg:w-6/12 flex items-center justify-center relative">
            
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