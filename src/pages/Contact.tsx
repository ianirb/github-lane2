import React from 'react';
import { Navigation } from '../components/Navigation';
import { 
  Mail,
  Phone,
  Linkedin,
  Building2
} from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <Navigation />

        <div className="relative z-10 container mx-auto px-6 py-20">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            For serious investment inquiries only.
          </p>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Airtable Form */}
            <div className="glass-card p-10 rounded-2xl">
              <h2 className="text-2xl font-bold mb-8">Submit Your Inquiry</h2>
              <div className="w-full">
                <iframe 
                  className="airtable-embed rounded-lg"
                  src="https://airtable.com/embed/appKpuo1dPnNhw7Fp/paguFOvx4YveuoBvT/form"
                  frameBorder="0"
                  width="100%"
                  height="700"
                  style={{ background: 'transparent', border: '1px solid #374151' }}
                ></iframe>
              </div>
            </div>

            {/* Alternative Contact Methods */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-8">Alternative Contact Methods</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 hover-card p-4 rounded-lg group">
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-violet-400 animate-icon" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-lg group-hover:text-violet-400 transition-colors duration-300">marrenmiranti@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 hover-card p-4 rounded-lg group">
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-violet-400 animate-icon" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Direct Line</p>
                      <p className="text-lg group-hover:text-violet-400 transition-colors duration-300">+1 (618) 606-0551</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 hover-card p-4 rounded-lg group">
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <Linkedin className="w-6 h-6 text-violet-400 animate-icon" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/marren-lane-046a6847/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-lg text-violet-400 hover:text-violet-300 transition-colors duration-300"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl hover-card">
                <Building2 className="w-12 h-12 text-violet-400 mb-6 animate-icon" />
                <h3 className="text-xl font-bold mb-4 hover-text">Our Commitment</h3>
                <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                  We review every request carefully and will reach out within 24-48 hours if there's a strong potential fit. Our focus is on facilitating meaningful connections that lead to successful transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;