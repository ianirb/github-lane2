import React from 'react';
import { 
  Building2, 
  Shield, 
  ChevronRight,
  Users,
  Brain
} from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Link } from 'react-router-dom';

export default function Home() {
  const networkCategories = [
    {
      id: 'family-offices',
      title: 'Family Offices',
      description: 'Direct access to multi-generational wealth and sophisticated private investors'
    },
    {
      id: 'private-equity',
      title: 'Private Equity',
      description: 'Strong relationships with leading PE firms seeking strategic investments'
    },
    {
      id: 'institutional-capital',
      title: 'Institutional Capital',
      description: 'Connections with major institutions and sovereign wealth funds'
    },
    {
      id: 'global-reach',
      title: 'Global Reach',
      description: 'Worldwide network of vetted partners and investment opportunities'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <Navigation />

        <div className="relative z-10 container mx-auto px-6 py-32">
          <h1 className="heading-xl mb-6">
            Lane Acquisitions:<br/>
            <span className="animate-gradient-text">Unlock the Future of Private Equity</span>
          </h1>
          <p className="body-text text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
            Connect with pre-vetted, institutional-grade investment opportunities typically reserved for the world's leading financial institutions.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <Link 
              to="/contact" 
              className="button-luxury button-glow px-8 py-4 rounded-lg flex items-center justify-center group"
            >
              Get in Touch
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              to="/portfolio" 
              className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg flex items-center justify-center group border border-violet-500/30 hover:border-violet-400/50 transition-all duration-300"
            >
              Our Portfolio
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="heading-lg text-center mb-16">Why Lane Acquisitions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center hover-card p-8 rounded-xl">
              <Shield className="w-12 h-12 text-violet-400 mx-auto mb-4 animate-icon" />
              <h3 className="heading-md mb-2">Vetted Opportunities</h3>
              <p className="body-text text-gray-400">Access to premium off-market deal flow</p>
            </div>
            <div className="text-center hover-card p-8 rounded-xl">
              <Users className="w-12 h-12 text-violet-400 mx-auto mb-4 animate-icon" />
              <h3 className="heading-md mb-2">Elite Network</h3>
              <p className="body-text text-gray-400">Connect with top-tier investors globally</p>
            </div>
            <div className="text-center hover-card p-8 rounded-xl">
              <Brain className="w-12 h-12 text-violet-400 mx-auto mb-4 animate-icon" />
              <h3 className="heading-md mb-2">AI-Powered Intelligence</h3>
              <p className="body-text text-gray-400">Driven by insights from leading AI agencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Network Content */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Gain Access to Our Elite Network</h2>
            <p className="text-gray-300 text-lg text-center mb-12">
              Access to an exclusive network of sophisticated investors and decision-makers, carefully curated over decades of relationship building.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {networkCategories.map((category) => (
                <div 
                  key={category.id} 
                  className="bg-gray-900/30 rounded-lg p-6 hover:bg-gray-900/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold text-violet-300 mb-3">{category.title}</h3>
                  <p className="text-gray-400">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { Home }