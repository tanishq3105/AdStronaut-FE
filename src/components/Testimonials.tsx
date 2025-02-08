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
    let intervalId: ReturnType<typeof setInterval>;
    
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
      className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-6 sm:py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/50" />
        
        {/* Navigation Buttons */}
        <button 
          onClick={prevTestimonial}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all z-10"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
        </button>
        <button 
          onClick={nextTestimonial}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all z-10"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
        </button>

        {/* Quote Icon */}
        <Quote className="absolute text-indigo-200 w-16 h-16 sm:w-24 sm:h-24 -top-6 -left-6 sm:-top-8 sm:-left-8 transform -rotate-12 opacity-50" />
        
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
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-center">
                    <div className="md:col-span-2 flex flex-col items-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse" />
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover ring-4 ring-white shadow-xl"
                        />
                      </div>
                      <h3 className="mt-4 sm:mt-6 font-semibold text-lg sm:text-xl text-gray-900 text-center">
                        {testimonial.author}
                      </h3>
                      <p className="text-indigo-600 font-medium text-sm sm:text-base">{testimonial.role}</p>
                    </div>
                    
                    <div className="md:col-span-3 relative mt-4 md:mt-0">
                      <div className="absolute top-0 left-0 transform -translate-x-2 sm:-translate-x-4 -translate-y-2 sm:-translate-y-4">
                        <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-300" />
                      </div>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed italic pl-6 sm:pl-8">
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
        <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                transition-all duration-300 ease-out
                ${currentIndex === index 
                  ? 'w-8 sm:w-12 bg-indigo-600' 
                  : 'w-2 sm:w-3 bg-gray-300 hover:bg-gray-400'}
                h-2 sm:h-3 rounded-full
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