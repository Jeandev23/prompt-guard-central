
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import NutritionHeader from '@/components/nutrition/NutritionHeader';

const Services = () => {
  const services = [
    {
      title: "Personalized Nutrition Plans",
      description: "Custom nutrition plans designed specifically for your body, lifestyle, and goals.",
      price: "$199",
      features: [
        "Initial comprehensive assessment",
        "Tailored meal plans",
        "Ongoing nutritional guidance",
        "Recipe suggestions",
        "Regular progress tracking"
      ]
    },
    {
      title: "One-on-One Consultation",
      description: "Direct sessions with our certified nutritionists to address your specific needs.",
      price: "$99",
      features: [
        "60-minute consultation",
        "Nutritional assessment",
        "Personalized recommendations",
        "Follow-up email support",
        "Educational resources"
      ]
    },
    {
      title: "Group Nutrition Workshops",
      description: "Learn with others in an interactive environment led by nutrition experts.",
      price: "$49",
      features: [
        "Small group sessions (max 10)",
        "Topic-focused workshops",
        "Interactive learning",
        "Take-home materials",
        "Community support"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <NutritionHeader />
      
      {/* Main Content with Gradient Background */}
      <div className="flex-1 flex flex-col bg-gradient-to-b from-orange-100 via-orange-200 to-red-200">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="bg-red-600 text-white p-6 text-center">
                  <h2 className="text-xl font-semibold">{service.title}</h2>
                  <p className="text-2xl font-bold mt-2">{service.price}</p>
                </div>
                <div className="p-6 flex-1">
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-red-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <Link to="/consultation">
                    <Button className="w-full bg-red-600 hover:bg-red-700">Book Now</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white/80 rounded-lg shadow-md p-8 max-w-3xl mx-auto mt-12">
            <h2 className="text-2xl font-semibold mb-4 text-center">Custom Corporate Services</h2>
            <p className="text-center mb-6">
              We also offer specialized nutrition programs for companies looking to improve employee health and wellness.
            </p>
            <div className="text-center">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                Contact for Corporate Rates
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center px-4">
          <p>© 2025 NutriLife. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Services;
