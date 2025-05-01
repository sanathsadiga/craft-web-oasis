
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Globe, Settings, Calendar, Link as LinkIcon } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-10 w-10 mb-4 text-theme-blue" />,
      title: "Landing Pages",
      description: "Stunning, conversion-focused landing pages that make a strong first impression and drive action.",
      link: "/pricing"
    },
    {
      icon: <Settings className="h-10 w-10 mb-4 text-theme-purple" />,
      title: "Full Websites",
      description: "Complete website solutions with dynamic content, user accounts, and database functionality.",
      link: "/pricing"
    },
    {
      icon: <LinkIcon className="h-10 w-10 mb-4 text-theme-teal" />,
      title: "Integration Services",
      description: "Connect your website with Google Sheets, CRMs, payment gateways, and other third-party services.",
      link: "/pricing"
    },
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Expert Web Development Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From simple landing pages to complex web applications, I provide end-to-end web development solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to={service.link} key={index} className="block h-full">
              <Card className="h-full card-hover border-t-4 border-t-primary">
                <CardHeader className="pb-2">
                  {service.icon}
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
