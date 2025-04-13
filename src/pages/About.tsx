import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { ChevronRight, Star, Quote, ChevronLeft, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  const [reviews, setReviews] = useState([
    {
      name: "Jonathan Sterling",
      position: "CEO, Sterling Capital Partners",
      content: "Lane Acquisitions has consistently delivered exceptional investment opportunities that align perfectly with our portfolio strategy. Their thorough vetting process and market intelligence are unmatched.",
      rating: 5,
      website: "https://sterlingcapital.com"
    },
    {
      name: "Victoria Chang",
      position: "Managing Director, Pacific Investments",
      content: "Working with Lane Acquisitions has transformed our approach to private market investments. Their network and deal flow are truly exceptional, providing access to opportunities we wouldn't find elsewhere.",
      rating: 5,
      website: "https://pacificinvestments.com"
    },
    {
      name: "Alexander Ross",
      position: "Principal, Ross Family Office",
      content: "The level of professionalism and attention to detail at Lane Acquisitions is remarkable. They've become our trusted partner for accessing institutional-grade investment opportunities.",
      rating: 5,
      website: "https://rossfamily.com"
    }
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [newReview, setNewReview] = useState({
    name: '',
    position: '',
    content: '',
    rating: 5,
    website: ''
  });

  const [showForm, setShowForm] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({
      name: '',
      position: '',
      content: '',
      rating: 5,
      website: ''
    });
    setSubmitSuccess(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitSuccess(false);
    }, 3000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(reviews.length / 3)) % Math.ceil(reviews.length / 3));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        
        <Navigation />

        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-violet-400 hover:border-violet-300 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20">
              <img 
                src="https://i.imgur.com/WD0KzkU.png"
                alt="Marren Lane"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:flex-1">
              <h1 className="text-5xl font-bold mb-4">Marren Lane</h1>
              <p className="text-2xl text-violet-400 mb-8">Founder & Owner of Lane Acquisitions</p>
              <div className="flex gap-4">
                <Link 
                  to="/contact" 
                  className="button-luxury button-glow px-6 py-3 rounded-lg flex items-center group"
                >
                  Get in Touch
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About</h2>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed hover-text">
              Our firm bridges the gap between opportunity and execution. Lane Acquisitions isn't just another private equity firm—we're a forward-thinking partner for investors, lenders, and asset holders looking to move at the speed of opportunity.
            </p>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed hover-text">
              The landscape of wealth is evolving, and so are we. Most firms operate within rigid, outdated frameworks. By utilizing AI-driven systems to enhance deal sourcing, underwriting, and asset management, our firm is defining new heights within PE that we didn't know were possible.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <h2 className="heading-lg">What Our Clients Say</h2>
            <button 
              onClick={() => setShowForm(!showForm)}
              className="button-luxury button-glow px-6 py-3 rounded-lg flex items-center group"
            >
              {showForm ? 'Close Form' : 'Share Your Experience'}
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Review Submission Form */}
          {showForm && (
            <div className="mb-16 glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Submit Your Review</h3>
              {submitSuccess ? (
                <div className="bg-violet-500/20 text-violet-200 p-4 rounded-lg mb-6">
                  Thank you for sharing your experience! Your review has been submitted successfully.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={newReview.name}
                      onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-violet-400 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Position & Company
                    </label>
                    <input
                      type="text"
                      value={newReview.position}
                      onChange={(e) => setNewReview({...newReview, position: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-violet-400 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Website (optional)
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="url"
                        value={newReview.website}
                        onChange={(e) => setNewReview({...newReview, website: e.target.value})}
                        placeholder="https://"
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-violet-400 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Review
                    </label>
                    <textarea
                      value={newReview.content}
                      onChange={(e) => setNewReview({...newReview, content: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-violet-400 transition-all duration-300"
                      rows={4}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Rating
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          onClick={() => setNewReview({...newReview, rating})}
                          className={`p-2 rounded-lg transition-all duration-300 ${
                            newReview.rating >= rating 
                              ? 'text-violet-400 hover:text-violet-300' 
                              : 'text-gray-600 hover:text-gray-500'
                          }`}
                        >
                          <Star className="w-6 h-6 fill-current" />
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full button-luxury button-glow px-6 py-3 rounded-lg flex items-center justify-center group"
                  >
                    Submit Review
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Reviews Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="flex">
                  {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, groupIndex) => (
                    <div 
                      key={groupIndex}
                      className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6"
                      style={{ minWidth: '100%' }}
                    >
                      {reviews.slice(groupIndex * 3, (groupIndex + 1) * 3).map((review, index) => (
                        <div 
                          key={index}
                          className="glass-card p-6 rounded-2xl h-full flex flex-col overflow-hidden"
                        >
                          <div className="mb-4 flex-shrink-0">
                            <h3 className="text-lg font-semibold hover-text truncate">{review.name}</h3>
                            <p className="text-violet-400 text-sm truncate">{review.position}</p>
                            {review.website && (
                              <a 
                                href={review.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors duration-300 mt-2"
                              >
                                <Globe className="w-4 h-4 flex-shrink-0" />
                                <span className="truncate">Visit Website</span>
                              </a>
                            )}
                          </div>
                          <div className="flex mb-3 flex-shrink-0">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-violet-400 fill-current animate-pulse-slow" />
                            ))}
                          </div>
                          <Quote className="w-6 h-6 text-violet-400/30 mb-3 flex-shrink-0" />
                          <p className="text-gray-300 text-sm leading-relaxed break-words line-clamp-6 overflow-ellipsis">
                            {review.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-violet-500/20 hover:bg-violet-500/30 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-violet-400" />
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-violet-400 w-4' 
                        : 'bg-violet-400/30 hover:bg-violet-400/50'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-violet-500/20 hover:bg-violet-500/30 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6 text-violet-400" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}