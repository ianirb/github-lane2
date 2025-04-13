import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { ChevronRight, Search, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/database.types';

type Deal = Database['public']['Tables']['deals']['Row'];

export function Portfolio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('All States');
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDeals = async () => {
    try {
      const { data, error: supabaseError } = await supabase
        .from('deals')
        .select('*')
        .eq('public_status', true)
        .order('created_at', { ascending: false });

      if (supabaseError) {
        throw supabaseError;
      }

      setDeals(data || []);
      setLoading(false);
      setError(null);
    } catch (err) {
      console.error('Error fetching deals:', err);
      setError(err instanceof Error ? err.message : 'Failed to load investment opportunities');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDeals();
    
    // Set up real-time subscription
    const subscription = supabase
      .channel('deals_changes')
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'deals',
          filter: 'public_status=true'
        }, 
        () => {
          fetchDeals();
        }
      )
      .subscribe();

    // Cleanup subscription on component unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const states = ['All States', ...new Set(deals.map(deal => deal.state).filter(Boolean).sort())];

  const filteredDeals = deals.filter(deal => {
    const matchesSearch = (deal.city?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
                         (deal.public_info?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
                         (deal.deal_name.toLowerCase()).includes(searchTerm.toLowerCase());
    const matchesState = selectedState === 'All States' || deal.state === selectedState;
    return matchesSearch && matchesState;
  });

  const formatPrice = (asking: string | null) => {
    if (!asking) return 'Contact for Details';
    
    const numericValue = Number(asking);
    if (!isNaN(numericValue)) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(numericValue).replace('$', '');
    }

    return 'Contact for Details';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <Navigation />

        <div className="relative z-10 container mx-auto px-6 py-20">
          <h1 className="heading-xl mb-6">
            Investment Opportunities
          </h1>
          <p className="body-text text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
            Explore our curated collection of premium investment opportunities.
          </p>
        </div>
      </header>

      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search opportunities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-400 transition-colors duration-300"
                />
              </div>
            </div>
            <div className="flex gap-4 flex-wrap">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-violet-400 transition-colors duration-300 cursor-pointer"
              >
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-400 mx-auto mb-4"></div>
              <p className="text-gray-400">Loading investment opportunities...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-400">{error}</p>
              <p className="text-gray-400 mt-2">Please try again later.</p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDeals.map((deal) => (
                <div key={deal.uuid} className="glass-card rounded-xl overflow-hidden hover-card">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <MapPin className="w-5 h-5 text-violet-400 flex-shrink-0" />
                      <h3 className="text-xl font-semibold text-violet-300">
                        {deal.city}, {deal.state}
                      </h3>
                    </div>
                    
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-violet-500/20 text-violet-400 rounded-full text-sm font-medium">
                        {deal.deal_type}
                      </span>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <p className="text-sm font-medium text-gray-400 mb-2">Investment Needs</p>
                        <p className="text-white">{deal.needs}</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-400 mb-2">Listed Price</p>
                        <div className="flex items-center gap-1">
                          <span className="text-lg font-semibold text-violet-400">
                            ${formatPrice(deal.asking)}
                          </span>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-400 mb-2">Additional Information</p>
                        <p className="text-gray-300 text-sm line-clamp-3">{deal.public_info}</p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        to="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20"
                      >
                        Learn More
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && !error && filteredDeals.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No opportunities found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}