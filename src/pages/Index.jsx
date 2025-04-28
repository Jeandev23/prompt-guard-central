
import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductModal from '@/components/nutrition/ProductModal';
import NutritionHeader from '@/components/nutrition/NutritionHeader';

const Index = () => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <NutritionHeader openProductModal={() => setIsProductModalOpen(true)} />
      
      {/* Hero Section with Gradient Background */}
      <div className="flex-1 flex flex-col bg-gradient-to-b from-orange-100 via-orange-200 to-red-200">
        <div className="container mx-auto py-16 px-4 flex flex-col items-center text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
            Healthy Living Starts with Nutrition
          </h1>
          <p className="text-lg text-gray-800 mb-8 max-w-xl">
            Get personalized nutrition plans, expert guidance, and premium supplements to help you achieve your health goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Book a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              Explore Our Services
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-white/80">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Approach to Nutrition</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Personalized Plans</h3>
                <p className="text-gray-700">Custom nutrition plans tailored to your specific body needs and health goals.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Expert Guidance</h3>
                <p className="text-gray-700">Work with certified nutritionists who care about your health journey.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Quality Products</h3>
                <p className="text-gray-700">Premium supplements and nutrition products verified for quality and effectiveness.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Products Modal */}
      <ProductModal isOpen={isProductModalOpen} onClose={() => setIsProductModalOpen(false)} />
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center px-4">
          <p>© 2025 NutriLife. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
