
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import ChatMessage from '@/components/chat/ChatMessage';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { applySecurityRules } from '@/lib/securityRules';

interface Message {
  id: number;
  content: string;
  isUser: boolean;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! How can I assist you today?",
      isUser: false
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Scroll to bottom when messages change
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Apply security rules to mask sensitive data
    const maskedInput = applySecurityRules(input);
    
    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      content: maskedInput,
      isUser: true
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsTyping(true);
    
    // Log to monitoring system (in a real app)
    console.log('Message logged:', maskedInput);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        content: getAIResponse(maskedInput),
        isUser: false
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };
  
  const getAIResponse = (userInput: string): string => {
    // Simple response generation for demo
    if (userInput.toLowerCase().includes('hello') || userInput.toLowerCase().includes('hi')) {
      return "Hello there! How can I help you today?";
    } else if (userInput.toLowerCase().includes('help')) {
      return "I'm here to help! What do you need assistance with?";
    } else if (userInput.toLowerCase().includes('adversarial')) {
      return "I've detected potentially adversarial content. In a real system, this would be flagged for review.";
    } else {
      return "Thank you for your message. Our AI is processing your request. This is a demonstration of the masking system for sensitive information.";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-guard-blue">Prompt Guard Central</Link>
          <Button variant="outline" asChild>
            <Link to="/login">Admin Login</Link>
          </Button>
        </div>
      </header>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {messages.map((message) => (
              <ChatMessage 
                key={message.id} 
                content={message.content} 
                isUser={message.isUser} 
              />
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 py-3 px-4 rounded-lg max-w-[80%] text-gray-700">
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={endOfMessagesRef} />
          </div>
        </div>
      </div>
      
      {/* Input Area */}
      <div className="border-t bg-white p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2">
            <Textarea 
              placeholder="Type your message..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="resize-none"
              rows={1}
            />
            <Button 
              type="button" 
              onClick={handleSendMessage}
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-xs text-gray-400 mt-2">
            <span>Your sensitive information like emails and API keys will be automatically masked</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
