
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

// Sample products data
const products = [
  { id: 1, name: 'Premium Multivitamin', price: 29.99, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', description: 'Complete daily nutrition in one tablet.' },
  { id: 2, name: 'Protein Powder', price: 39.99, image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b', description: 'Plant-based protein to support muscle growth.' },
  { id: 3, name: 'Omega-3 Supplements', price: 24.99, image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07', description: 'Essential fatty acids for heart and brain health.' },
  { id: 4, name: 'Probiotics', price: 34.99, image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9', description: 'Support gut health and immune function.' }
];

const ProductModal = ({ isOpen, onClose }) => {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products'); // 'products' or 'cart'
  
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };
  
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity } 
        : item
    ));
  };
  
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };
  
  const checkout = () => {
    alert('Checkout functionality would be implemented here!');
    // In a real app, you would integrate with a payment gateway
    setCart([]);
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center">
          <DialogTitle className="text-2xl font-bold">
            {activeTab === 'products' ? 'Our Products' : 'Your Cart'}
          </DialogTitle>
          <div className="flex space-x-4">
            <button 
              onClick={() => setActiveTab('products')}
              className={`px-3 py-1 rounded-md ${activeTab === 'products' ? 'bg-red-600 text-white' : 'text-gray-600'}`}
            >
              Products
            </button>
            <button 
              onClick={() => setActiveTab('cart')}
              className={`px-3 py-1 rounded-md flex items-center ${activeTab === 'cart' ? 'bg-red-600 text-white' : 'text-gray-600'}`}
            >
              Cart {cart.length > 0 && <span className="ml-1 bg-red-700 text-white rounded-full px-2 py-0.5 text-xs">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>}
            </button>
          </div>
        </div>
        
        <DialogDescription>
          {activeTab === 'products' ? 'Browse our selection of premium nutrition products.' : 'Review your selected items.'}
        </DialogDescription>
        
        <div className="mt-4">
          {activeTab === 'products' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products.map(product => (
                <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-sm text-gray-600 my-2">{product.description}</p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="font-bold">${product.price}</span>
                      <Button 
                        onClick={() => addToCart(product)}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">Your cart is empty</p>
                  <Button 
                    onClick={() => setActiveTab('products')}
                    variant="outline"
                    className="mt-4"
                  >
                    Browse Products
                  </Button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded mr-4" 
                          />
                          <div>
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-gray-600">${item.price}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 border rounded-l"
                          >
                            -
                          </button>
                          <span className="px-4 py-1 border-t border-b">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 border rounded-r"
                          >
                            +
                          </button>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="ml-4 text-red-600"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-semibold text-lg mb-4">
                      <span>Total:</span>
                      <span>${calculateTotal()}</span>
                    </div>
                    <Button 
                      onClick={checkout}
                      className="w-full bg-red-600 hover:bg-red-700"
                    >
                      Checkout
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
