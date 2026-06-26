import React from "react";

const Footer = () => {
  return (
    
    <footer className="w-full bg-black opacity-80 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {/* Column 1 */}
        <div className="text-white text-sm font-serif">
          <h1 className="text-2xl font-medium mb-5 text-gray-200">Company</h1>
          <ul className="space-y-2.5 font-semibold text-white">
            <li className="hover:text-white cursor-pointer transition">Terms of Use</li>
            <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer transition">License Agreement</li>
            <li className="hover:text-white cursor-pointer transition">About Us</li>
            <li className="hover:text-white cursor-pointer transition">Partners</li>
            <li className="hover:text-white cursor-pointer transition">Abuse</li>
            <li className="hover:text-white cursor-pointer transition">Contact Support</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="text-white text-sm font-serif">
          <h1 className="text-2xl font-medium mb-5 text-gray-200">Product</h1>
          <ul className="space-y-2.5 font-semibold text-white">
            <li className="hover:text-white cursor-pointer transition">FAQ</li>
            <li className="hover:text-white cursor-pointer transition">Download</li>
            <li className="hover:text-white cursor-pointer transition">400+ Features</li>
            <li className="hover:text-white cursor-pointer transition">Affiliate Program</li>
            <li className="hover:text-white cursor-pointer transition">Documentation</li>
            <li className="hover:text-white cursor-pointer transition">Forum</li>
            <li className="hover:text-white cursor-pointer transition">Blog</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="text-white text-sm font-serif">
          <h1 className="text-2xl font-medium mb-5 text-gray-200">Themes & Templates</h1>
          <ul className="space-y-2.5 font-semibold text-white">
            <li className="hover:text-white cursor-pointer transition">Website Templates</li>
            <li className="hover:text-white cursor-pointer transition">WordPress Themes</li>
            <li className="hover:text-white cursor-pointer transition">License Agreement</li>
            <li className="hover:text-white cursor-pointer transition">HTML Templates</li>
            <li className="hover:text-white cursor-pointer transition">CSS Templates</li>
            <li className="hover:text-white cursor-pointer transition">Joomla Templates</li>
            <li className="hover:text-white cursor-pointer transition">HTML5 Templates</li>
            <li className="hover:text-white cursor-pointer transition">One Page Templates</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="text-white text-sm font-serif">
          <h1 className="text-2xl font-medium uppercase mb-5 text-gray-200">Nicepage</h1>
          <ul className="space-y-2.5 font-semibold text-white">
            <li className="hover:text-white cursor-pointer transition">Website Builder</li>
            <li className="hover:text-white cursor-pointer transition">HTML Website Builder</li>
            <li className="hover:text-white cursor-pointer transition">WordPress Website Builder</li>
            <li className="hover:text-white cursor-pointer transition">Joomla Page Builder</li>
            <li className="hover:text-white cursor-pointer transition">WYSIWYG HTML Editor</li>
            <li className="hover:text-white cursor-pointer transition">Static Site Generator</li>
            <li className="hover:text-white cursor-pointer transition">HTML Code Generator</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="text-white text-sm font-serif">
          <h1 className="text-2xl font-medium uppercase mb-5 text-gray-200">Web Design</h1>
          <ul className="space-y-2.5 font-semibold text-white">
            <li className="hover:text-white cursor-pointer transition">Website Designs</li>
            <li className="hover:text-white cursor-pointer transition">Web Page Designs</li>
            <li className="hover:text-white cursor-pointer transition">Landing Pages</li>
            <li className="hover:text-white cursor-pointer transition">Homepage Designs</li>
            <li className="hover:text-white cursor-pointer transition">Website Mockup</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;