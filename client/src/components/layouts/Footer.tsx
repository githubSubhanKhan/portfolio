import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Redirect functions
  const redirectToGithub = () => {
    window.open('https://github.com/githubSubhanKhan', '_blank');
  };
  
  const redirectToLinkedin = () => {
    window.open('https://www.linkedin.com/in/msubhankhan21', '_blank');
  };
  
  const redirectToEmail = () => {
    window.location.href = 'mailto:subhankhan21102005@gmail.com';
  };
  
  return (
    <footer className="bg-bluecustom w-full py-8">
      <div className="container mx-auto flex flex-col items-center">
        {/* 3 rounded circle divs with icons */}
        <div className="flex space-x-6 mb-6">
          <div 
            className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer hover:bg-transparent hover:text-black hover:scale-105 transition-all duration-300 border hover:border-black border-[2px]"
            onClick={redirectToGithub}
          >
            <Github size={20} />
          </div>
          <div 
            className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer hover:bg-transparent hover:text-black hover:scale-105 transition-all duration-300 border hover:border-black border-[2px]"
            onClick={redirectToLinkedin}
          >
            <Linkedin size={20} />
          </div>
          <div 
            className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer hover:bg-transparent hover:text-black hover:scale-105 transition-all duration-300 border hover:border-black border-[2px]"
            onClick={redirectToEmail}
          >
            <Mail size={20} />
          </div>
        </div>
        
        {/* Copyright text */}
        <div className="text-black text-sm">
          &copy; {currentYear} Muhammad Subhan Khan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;