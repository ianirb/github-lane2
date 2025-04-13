import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6 group">
              <Building2 className="w-6 h-6 text-violet-400 animate-icon" />
              <span className="text-xl font-semibold tracking-wide group-hover:text-violet-300 transition-all duration-300">LANE ACQUISITIONS</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed hover:text-gray-300 transition-all duration-300">Elevating Capital Connections to New Heights of Excellence.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-violet-300 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-violet-400 after:transition-all after:duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-violet-300 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-violet-400 after:transition-all after:duration-300">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-violet-300 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-violet-400 after:transition-all after:duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-violet-400 animate-icon" />
                <a href="mailto:marrenmiranti@gmail.com" className="text-gray-400 hover:text-violet-300 transition-all duration-300">marrenmiranti@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-violet-400 animate-icon" />
                <span className="text-gray-400 group-hover:text-violet-300 transition-all duration-300">+1 (618) 606-0551</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Linkedin className="w-5 h-5 text-violet-400 animate-icon" />
                <a 
                  href="https://www.linkedin.com/in/marren-lane-046a6847/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-violet-300 transition-all duration-300"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-violet-300 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-violet-400 after:transition-all after:duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-violet-300 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-violet-400 after:transition-all after:duration-300">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <p className="text-sm text-gray-500 leading-relaxed hover:text-gray-400 transition-all duration-300">
            All transactions are conducted with the utmost discretion and subject to comprehensive due diligence. Lane Acquisitions does not provide financial or legal advice.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500 hover:text-gray-400 transition-all duration-300">
          © {new Date().getFullYear()} Lane Acquisitions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}