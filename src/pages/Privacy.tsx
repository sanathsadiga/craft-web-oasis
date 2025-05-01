
import React from "react";
import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Last updated: May 1, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
            <p>
              This Privacy Policy describes how WebCraftPro ("we", "us", or "our") collects, uses, and discloses your information when you use our website and services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p>
              <strong>Personal Information:</strong> When you contact us or use our services, we may collect personal information such as your name, email address, phone number, and business details.
            </p>
            <p>
              <strong>Usage Data:</strong> We may collect information on how you interact with our website, including pages visited, time spent, and actions taken.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Communicate with you about our services</li>
              <li>Improve and personalize your experience</li>
              <li>Address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Sharing and Disclosure</h2>
            <p>
              We may share your information with service providers who assist us in operating our business. We do not sell your personal information to third parties.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. You can set your browser to refuse all or some browser cookies.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>Email: contact@webcraftpro.com</p>
            <p>
              <a 
                href="https://calendly.com/sanathadigas/30min" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Schedule a call for more information
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
