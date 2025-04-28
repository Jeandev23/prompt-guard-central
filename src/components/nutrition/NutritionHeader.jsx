
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const NutritionHeader = ({ openProductModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-red-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              NutriLife
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-red-200 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-red-200 transition-colors">
              About
            </Link>
            <Link to="/services" className="text-white hover:text-red-200 transition-colors">
              Services
            </Link>
            <button 
              onClick={openProductModal} 
              className="text-white hover:text-red-200 transition-colors"
            >
              Products
            </button>
            <Link to="/consultation" className="text-white hover:text-red-200 transition-colors">
              Book a Consultation
            </Link>
          </nav>

          {/* Authentication Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-red-700">
              <Link to="/login">Log In</Link>
            </Button>
            <Button className="bg-white text-red-600 hover:bg-red-100">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-500">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-white hover:text-red-200 transition-colors py-2">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-red-200 transition-colors py-2">
                About
              </Link>
              <Link to="/services" className="text-white hover:text-red-200 transition-colors py-2">
                Services
              </Link>
              <button 
                onClick={openProductModal} 
                className="text-white hover:text-red-200 transition-colors text-left py-2"
              >
                Products
              </button>
              <Link to="/consultation" className="text-white hover:text-red-200 transition-colors py-2">
                Book a Consultation
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t border-red-500">
                <Button variant="ghost" className="text-white justify-start hover:bg-red-700">
                  <Link to="/login">Log In</Link>
                </Button>
                <Button className="bg-white text-red-600 hover:bg-red-100 w-full">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NutritionHeader;
