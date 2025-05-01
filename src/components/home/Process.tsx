
import React from "react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We start with a detailed discussion about your business needs, goals, and vision for your website.",
    },
    {
      number: "02",
      title: "Planning & Design",
      description:
        "Based on our consultation, I'll create a project plan and design concept tailored to your requirements.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "I'll build your website using modern technologies, ensuring it's responsive, fast, and user-friendly.",
    },
    {
      number: "04",
      title: "Launch & Support",
      description:
        "After testing, your site goes live. I provide ongoing support and maintenance to keep everything running smoothly.",
    },
  ];

  return (
    <section className="section bg-gradient-to-br from-theme-dark via-theme-blue/90 to-theme-purple/90 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Process</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            A proven approach that ensures your project is completed efficiently
            and meets your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Line connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-white/30 -translate-y-1/2 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2.5 w-2.5 bg-white rounded-full"></div>
                </div>
              )}
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 relative z-10 h-full">
                <span className="text-5xl font-bold text-white/20 mb-4 block">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
