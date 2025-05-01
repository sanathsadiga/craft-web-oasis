
import React from "react";
import { CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    "Modern, responsive designs that work on all devices",
    "Fast loading times and optimized performance",
    "SEO-friendly code and structure",
    "Custom integrations with third-party services",
    "Secure and reliable hosting solutions",
    "Ongoing maintenance and support"
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose My Web Development Services?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              I create websites that not only look beautiful but also deliver results for your business. My focus is on creating high-quality, performance-optimized web experiences.
            </p>
            
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-theme-blue/10 via-theme-purple/10 to-theme-teal/10 rounded-2xl p-8 border border-gray-200">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-theme-blue/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-theme-purple/20 rounded-full blur-xl"></div>
              
              <div className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
                <h3 className="font-medium mb-2 text-lg">Cutting-Edge Technology</h3>
                <p className="text-gray-600">Using the latest frameworks and technologies to ensure your website remains modern and maintainable.</p>
              </div>
              
              <div className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6 ml-8">
                <h3 className="font-medium mb-2 text-lg">Performance Optimized</h3>
                <p className="text-gray-600">Fast-loading websites with optimized images and efficient code for the best user experience.</p>
              </div>
              
              <div className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 ml-4">
                <h3 className="font-medium mb-2 text-lg">Fully Customized</h3>
                <p className="text-gray-600">Tailored solutions designed specifically for your business needs and goals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
