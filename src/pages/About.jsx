
import React from 'react';
import NutritionHeader from '@/components/nutrition/NutritionHeader';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <NutritionHeader />
      
      {/* Main Content with Gradient Background */}
      <div className="flex-1 flex flex-col bg-gradient-to-b from-orange-100 via-orange-200 to-red-200">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">About NutriLife</h1>
          
          <div className="bg-white/80 rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-6">
              At NutriLife, we believe that good nutrition is the foundation of a healthy life. Our mission is to provide personalized nutrition guidance and high-quality supplements to help people achieve their health goals and live their best lives.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="mb-6">
              Our team consists of certified nutritionists, dietitians, and health experts with years of experience in helping clients transform their health through better nutrition. We are passionate about staying up-to-date with the latest research and innovations in nutritional science.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
                <h3 className="font-semibold">Dr. Sarah Johnson</h3>
                <p className="text-sm text-gray-600">Chief Nutritionist</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
                <h3 className="font-semibold">Michael Chen</h3>
                <p className="text-sm text-gray-600">Dietitian Specialist</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 rounded-lg shadow-md p-8 max-w-3xl mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p className="mb-4">
              We believe in a holistic approach to nutrition that considers your unique body, lifestyle, preferences, and goals. We don't believe in one-size-fits-all diets or quick fixes. Instead, we focus on sustainable, science-based approaches to nutrition that create lasting change.
            </p>
            <p>
              Whether you're looking to lose weight, gain muscle, improve athletic performance, manage a health condition, or simply feel better in your daily life, we're here to support you with expert guidance and premium nutrition products.
            </p>
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

export default About;
