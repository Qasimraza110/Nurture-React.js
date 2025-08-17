import React from "react";

export default function About() {
  return (
    <div className="bg-white min-h-[60vh] py-8 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-center lg:items-start">
       
          <div className="flex-1 min-w-[280px] bg-white rounded-xl shadow-md p-5 sm:p-8 mb-6 lg:mb-0 animate-slide-up">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Nurture</h1>
            <p className="mb-6 text-gray-700 text-base sm:text-lg">
              Nurture is dedicated to bringing the beauty and tranquility of nature into your home and garden. We believe every plant has a story, and every garden is a journey. Our nursery offers a wide variety of healthy, vibrant plants, expert advice, and a passion for helping you grow your own green sanctuary.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="mb-6 text-gray-700 text-base sm:text-lg">
              To inspire and support plant lovers of all levels by providing quality plants, sustainable gardening solutions, and a welcoming community. We strive to make the world greener, one plant at a time.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
            <ul className="mb-6 pl-5 text-gray-600 list-disc space-y-1 text-base sm:text-lg">
              <li>Wide selection of indoor and outdoor plants</li>
              <li>Expert gardening tips and support</li>
              <li>Eco-friendly and sustainable practices</li>
              <li>Friendly, knowledgeable staff</li>
              <li>Community events and workshops</li>
            </ul>
          </div>
        
          <div className="flex-1 min-w-[220px] bg-white rounded-xl shadow-md p-5 sm:p-8 flex flex-col items-center animate-slide-up delay-200">
            <img
              src="/pexels-minan1398-793012.jpg"
              alt="About Nurture"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md max-h-80 object-cover rounded-lg shadow mb-6 transition-transform duration-500 hover:scale-105"
            />
            <h2 className="text-2xl font-semibold mb-2">Meet Our Team</h2>
            <p className="text-gray-700 text-center text-base sm:text-lg">
              Our passionate team of horticulturists, gardeners, and plant enthusiasts is here to help you every step of the way. Whether you're a beginner or a seasoned gardener, we're committed to making your plant journey a success.
            </p>
          </div>
        </div>
      </div>

      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s ease;
          }
          .animate-slide-up {
            opacity: 0;
            transform: translateY(40px);
            animation: slideUp 1s forwards;
          }
          .animate-slide-up.delay-200 {
            animation-delay: 0.2s;
          }
          @keyframes fadeIn {
            from { opacity: 0;}
            to { opacity: 1;}
          }
          @keyframes slideUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );

}
