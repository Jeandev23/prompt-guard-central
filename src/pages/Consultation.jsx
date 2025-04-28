
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import NutritionHeader from '@/components/nutrition/NutritionHeader';

const Consultation = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your consultation request has been submitted! We will contact you shortly.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <NutritionHeader />
      
      {/* Main Content with Gradient Background */}
      <div className="flex-1 flex flex-col bg-gradient-to-b from-orange-100 via-orange-200 to-red-200">
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center">Book a Consultation</h1>
            <p className="text-center mb-8">
              Fill out the form below to schedule your personalized nutrition consultation.
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="consultationType" className="block text-sm font-medium mb-2">
                      Consultation Type
                    </label>
                    <select
                      id="consultationType"
                      className="w-full rounded-md border border-input px-3 py-2 bg-background"
                      required
                    >
                      <option value="">Select a type</option>
                      <option value="weight-loss">Weight Loss</option>
                      <option value="muscle-gain">Muscle Gain</option>
                      <option value="general-health">General Health</option>
                      <option value="special-diet">Special Diet</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full rounded-md border border-input px-3 py-2 bg-background"
                      placeholder="Tell us about your goals or any specific concerns..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="bg-red-600 hover:bg-red-700">
                    Schedule Consultation
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="mt-12 bg-white/80 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">What to Expect</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">1.</span>
                  <span>We'll contact you within 24 hours to confirm your appointment.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">2.</span>
                  <span>Initial consultations typically last 60 minutes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">3.</span>
                  <span>Come prepared with any medical records or diet journals that might be helpful.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">4.</span>
                  <span>You'll receive a personalized plan within 48 hours after your consultation.</span>
                </li>
              </ul>
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

export default Consultation;
