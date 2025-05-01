
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-theme-blue to-theme-purple rounded-2xl p-10 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a web solution that perfectly
            fits your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/pricing">
              <Button
                size="lg"
                className="bg-white text-theme-purple hover:bg-gray-100"
              >
                View Pricing
              </Button>
            </Link>
            <a
              href="https://calendly.com/sanathadigas/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Schedule a Call
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
