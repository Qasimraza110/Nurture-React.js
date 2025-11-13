import React from "react";

const Footer = () => ( 
  <footer className="bg-black text-white py-10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap gap-8 justify-between">
        
        <div className="flex-1 min-w-[220px]">  
          <h3 className="text-lg font-semibold mb-2">Download Our App</h3> 
          <p className="mb-4 text-sm">Download App for Android and IOS mobile phone.</p>
          <div className="flex gap-3">     
            <img
              src="/f1d51c541ed356d3e066d5ef2744c1ca.png"
              alt="App Store"
              className="w-28 h-auto"
            />
            <img
              src="/467c5f93c019559dc54e034e2af81484.png"
              alt="Play Store"
              className="w-28 h-auto"
            />
          </div>
        </div>
      
        <div className="flex-1 min-w-[220px] flex flex-col items-start">
          <img
            src="/photo-output.PNG"
            alt="Nurture Logo"
            className="w-28 mb-3"
          />
          <p className="text-sm">
            Our purpose is to make the world enjoy the Greenery and Nature and make the soul feel pleasant.
          </p>
        </div>
       
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">Coupons</li>
            <li className="hover:text-green-400 cursor-pointer">Blog post</li>
            <li className="hover:text-green-400 cursor-pointer">Return policy</li>
            <li className="hover:text-green-400 cursor-pointer">Join Affiliate</li>
          </ul>
        </div>
    
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">Facebook</li>
            <li className="hover:text-green-400 cursor-pointer">Instagram</li>
            <li className="hover:text-green-400 cursor-pointer">Twitter</li>
            <li className="hover:text-green-400 cursor-pointer">Youtube</li>
          </ul>
        </div>
      </div>
      <hr className="my-8 border-gray-700" />
      <p className="text-center text-xs text-gray-400">
        Copyright 2025 - Nurture
      </p>
    </div>
  </footer>
);


export default Footer;





