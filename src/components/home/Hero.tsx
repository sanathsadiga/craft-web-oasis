
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-theme-dark via-theme-blue to-theme-purple text-white py-24 md:py-32 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Professional Web Solutions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-teal-200">
              That Drive Results
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            From stunning landing pages to full-featured websites with custom
            integrations. I build modern, responsive solutions that help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/pricing">
              <Button size="lg" className="bg-white text-theme-dark hover:bg-gray-100 px-8">
                View Services
              </Button>
            </Link>
            <a href="https://calendly.com/sanathadigas/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-white text-black hover:bg-white/10 px-8">
                Schedule a Call
              </Button>

            </a>
          </div>
        </div>
      </div>

      {/* Background elements - abstract shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-blue-300 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
