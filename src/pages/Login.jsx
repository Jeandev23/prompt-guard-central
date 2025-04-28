
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import NutritionHeader from '@/components/nutrition/NutritionHeader';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login functionality would be implemented here!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <NutritionHeader />
      
      {/* Main Content with Gradient Background */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-orange-100 via-orange-200 to-red-200 p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Log In to Your Account</h1>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    required
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  
                  <div className="text-sm">
                    <a href="#" className="text-red-600 hover:text-red-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  Log In
                </Button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="text-red-600 hover:text-red-500">
                  Sign up
                </Link>
              </p>
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

export default Login;
