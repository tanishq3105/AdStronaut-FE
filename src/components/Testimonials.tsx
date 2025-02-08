import React, { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  author: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "This product has completely transformed how we operate. The efficiency gains have been remarkable, and our team couldn't be happier with the results we've seen across all departments.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 2,
    author: "Michael Chen",
    role: "Lead Developer",
    content: "The integration was seamless, and the results were immediate. This is exactly what we've been looking for all along. The support team has been exceptional throughout the process.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 3,
    author: "Emma Williams",
    role: "Product Manager",
    content: "Outstanding support and incredible features. This has become an essential part of our daily workflow. I can't imagine going back to our old system now.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (!isPaused) {
      intervalId = setInterval(nextTestimonial, 5000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPaused, nextTestimonial]);

  return (
    <div 
      className="w-full max-w-6xl mx-auto px-4 py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/50" />
        
        {/* Navigation Buttons */}
        <button 
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all z-10"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-indigo-600" />
        </button>
        <button 
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all z-10"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-indigo-600" />
        </button>

        {/* Quote Icon */}
        <Quote className="absolute text-indigo-200 w-24 h-24 -top-8 -left-8 transform -rotate-12 opacity-50" />
        
        <div className="relative overflow-hidden">
          <div 
            className="transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0"
                  style={{ width: '100%' }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                    <div className="md:col-span-2 flex flex-col items-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse" />
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="relative w-32 h-32 rounded-full object-cover ring-4 ring-white shadow-xl"
                        />
                      </div>
                      <h3 className="mt-6 font-semibold text-xl text-gray-900">
                        {testimonial.author}
                      </h3>
                      <p className="text-indigo-600 font-medium">{testimonial.role}</p>
                    </div>
                    
                    <div className="md:col-span-3 relative">
                      <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
                        <Quote className="w-8 h-8 text-indigo-300" />
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed italic pl-8">
                        {testimonial.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                transition-all duration-300 ease-out
                ${currentIndex === index 
                  ? 'w-12 bg-indigo-600' 
                  : 'w-3 bg-gray-300 hover:bg-gray-400'}
                h-3 rounded-full
              `}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;