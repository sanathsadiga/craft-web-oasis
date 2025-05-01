
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
  };

  return (
    <Layout>
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or questions about my services? Reach out and let's discuss how I can help you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" placeholder="Tell me about your project or inquiry" className="min-h-32" required />
                  </div>
                  
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="flex flex-col gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" /> Schedule a Call
                  </CardTitle>
                  <CardDescription>Book a free 30-minute consultation call</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-700">
                    Prefer to discuss your project directly? Schedule a call at a time that works for you.
                  </p>
                  <a 
                    href="https://calendly.com/sanathadigas/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full">Book a Call on Calendly</Button>
                  </a>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" /> Email
                  </CardTitle>
                  <CardDescription>Send me an email directly</CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:contact@webcraftpro.com"
                    className="text-blue-600 hover:underline"
                  >
                    contact@webcraftpro.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-theme-blue/10 to-theme-purple/10 border-none">
                <CardContent className="pt-6">
                  <p className="text-center text-lg font-medium mb-4">
                    Looking for a quick response?
                  </p>
                  <div className="flex justify-center">
                    <a 
                      href="https://calendly.com/sanathadigas/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>Schedule a Call Now</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
