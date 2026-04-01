import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#101727] text-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
       
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-5 gap-8 text-center">
          
          <div className="md:col-span-1 ">
              <h2 className="text-2xl font-bold mb-4">DigiTools</h2>
      <p className="text-zinc-400 text-sm">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

        
          <div>
                  <h3 className="text-zinc-200 font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                     <li><a href="#" className="hover:text-white transition">Templates</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
          </ul>
          </div>


            <div>
            <h3 className="text-zinc-200 font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-white transition">About</a></li> 
          <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
            </ul>
          </div>
        
          <div>
   <h3 className="text-zinc-200 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-zinc-400 text-sm">
         <li><a href="#" className="hover:text-white transition">Documentation</a></li>
    <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Community</a></li>
          <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

        {/* icons section */}
          <div>
            <h3 className="text-zinc-200 font-semibold mb-4">Social Links</h3>
              <div className="flex gap-4">
      <a href="#" className="bg-zinc-700 p-2 rounded-full hover:bg-white hover:text-black transition"><FaInstagram/></a>
         <a href="#" className="bg-zinc-700 p-2 rounded-full hover:bg-white hover:text-black transition"><FaFacebook /></a>
              <a href="#" className="bg-zinc-700 p-2 rounded-full hover:bg-white hover:text-black transition"><FaXTwitter /></a>
            </div>
          </div>

        </div>

          
        <div className="mt-12 border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between text-zinc-500 text-sm gap-4">
          <div>© {new Date().getFullYear()} DigiTools. All rights reserved.</div>
          <div className="flex gap-4">
               <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
       <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;