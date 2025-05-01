
import React from "react";
import Layout from "@/components/layout/Layout";
import PricingCard from "@/components/pricing/PricingCard";
import { useCurrency } from "@/hooks/useCurrency";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const { format } = useCurrency();
  
  const pricingData = [
    {
      title: "Landing Page",
      description: "Perfect for showcasing your business with a professional online presence",
      yearlyPrice: { inr: 10000, usd: 120 },
      monthlyPrice: { inr: 700, usd: 9 },
      advancePayment: { inr: 1000, usd: 12 },
      features: [
        { text: "Responsive design for all devices" },
        { text: "Up to 3 content sections" },
        { text: "Contact form integration" },
        { text: "SEO optimization" },
        { text: "Analytics setup" },
        { text: "Hosting & maintenance included" },
      ],
      popular: false,
    },
    {
      title: "Full Website",
      description: "Complete website solution with database and custom functionality",
      yearlyPrice: { inr: 35000, usd: 420 },
      monthlyPrice: { inr: 4000, usd: 48 },
      advancePayment: { inr: 5000, usd: 60 },
      features: [
        { text: "All features from Landing Page" },
        { text: "Database integration" },
        { text: "User authentication system" },
        { text: "Admin dashboard" },
        { text: "Content management system" },
        { text: "Multiple page templates" },
        { text: "Premium hosting & security" },
      ],
      popular: true,
    },
  ];

  return (
    <Layout>
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Services & Pricing</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent pricing options for your web development needs. Choose the plan that fits your project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pricingData.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                description={plan.description}
                yearlyPrice={plan.yearlyPrice}
                monthlyPrice={plan.monthlyPrice}
                advancePayment={plan.advancePayment}
                features={plan.features}
                popular={plan.popular}
              />
            ))}
            
            <div className="bg-secondary/50 rounded-xl p-6 border border-border flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-3">Custom Integrations</h3>
              <p className="mb-4 text-muted-foreground">
                Connect your website with third-party services and automate workflows
              </p>
              
              <div className="mb-6 flex-1">
                <div className="mb-2">
                  <span className="text-3xl font-bold">
                    {format({ inr: 500, usd: 6 })}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    /hour
                  </span>
                </div>
                
                <div className="mt-4 text-sm font-medium">
                  One-time setup for webhooks: {format({ inr: 4000, usd: 48 })}
                </div>
                
                <ul className="space-y-3 mt-6">
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Google Sheets integration</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">CRM connections</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Payment gateway setup</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Custom API integrations</span>
                  </li>
                </ul>
              </div>
              
              <a 
                href="https://calendly.com/sanathadigas/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto"
              >
                <Button variant="outline" className="w-full">Discuss Your Needs</Button>
              </a>
            </div>
          </div>
          
          <div className="bg-accent/10 rounded-xl p-8 border border-accent/30">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2">What's included in the hosting service?</h3>
                <p className="text-gray-700">All plans include reliable VPS hosting, SSL certificate, regular backups, and technical maintenance.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer payment plans?</h3>
                <p className="text-gray-700">Yes, you can choose between yearly or monthly payment options after the initial advance payment.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What is the development timeline?</h3>
                <p className="text-gray-700">Landing pages typically take 1-2 weeks, while full websites require 4-6 weeks depending on complexity.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I upgrade my plan later?</h3>
                <p className="text-gray-700">Yes, you can upgrade from a landing page to a full website at any time, with the cost adjusted accordingly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
