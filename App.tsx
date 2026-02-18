
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchFilters from './components/SearchFilters';
import PropertyCard from './components/PropertyCard';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PROPERTIES } from './constants';
import { FilterState, PropertyStatus } from './types';

const App: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    status: 'All',
    type: 'All',
    minPrice: 0,
    maxPrice: 0,
    location: '',
    bedrooms: 'Any'
  });

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(property => {
      if (filters.status !== 'All' && property.status !== filters.status) return false;
      if (filters.type !== 'All' && property.type !== filters.type) return false;
      if (filters.location && !property.location.includes(filters.location)) return false;
      if (filters.minPrice > 0 && property.price < filters.minPrice) return false;
      if (filters.maxPrice > 0 && property.price > filters.maxPrice) return false;
      
      if (filters.bedrooms !== 'Any') {
        const beds = parseInt(filters.bedrooms);
        if (filters.bedrooms === '4+') {
          if (property.bedrooms < 4) return false;
        } else if (property.bedrooms !== beds) {
          return false;
        }
      }
      
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Properties Section */}
        <section id="properties" className="pb-24 pt-0 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SearchFilters filters={filters} setFilters={setFilters} />
            
            <div className="mt-20">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                  <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block underline decoration-emerald-500/30 underline-offset-8">Property Catalog</span>
                  <h2 className="text-4xl font-bold font-serif text-slate-900 leading-tight">
                    {filters.status === 'All' ? 'Latest' : filters.status} Properties
                  </h2>
                </div>
                <p className="text-slate-500 font-medium">
                  Showing {filteredProperties.length} available listings
                </p>
              </div>

              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-slate-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">No matching properties found</h3>
                  <p className="text-slate-500 mb-8">Try adjusting your filters to find more options.</p>
                  <button
                    onClick={() => setFilters({
                      status: 'All',
                      type: 'All',
                      minPrice: 0,
                      maxPrice: 0,
                      location: '',
                      bedrooms: 'Any'
                    })}
                    className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-all"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
              
              {filteredProperties.length > 0 && (
                <div className="mt-16 text-center">
                  <button className="px-10 py-4 border-2 border-emerald-900 text-emerald-900 font-bold rounded-xl hover:bg-emerald-900 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-slate-200">
                    Load More Listings
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <About />
        
        {/* Trust Stats Section (Mid-page break) */}
        <section className="bg-emerald-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-white mb-2">1,200+</p>
                <p className="text-emerald-300 text-sm font-bold uppercase tracking-widest">Properties Sold</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-2">500+</p>
                <p className="text-emerald-300 text-sm font-bold uppercase tracking-widest">Active Rentals</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-2">10+</p>
                <p className="text-emerald-300 text-sm font-bold uppercase tracking-widest">Awards Won</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-2">100%</p>
                <p className="text-emerald-300 text-sm font-bold uppercase tracking-widest">Legal Security</p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        
        <Contact />
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/251911123456"
        target="_blank"
        className="fixed bottom-8 right-8 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all active:scale-90 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.139c1.52.907 3.0 1.384 4.595 1.385 5.363 0 9.724-4.362 9.726-9.727.001-2.601-1.012-5.045-2.852-6.887-1.84-1.841-4.283-2.855-6.882-2.855-5.366 0-9.728 4.362-9.73 9.727-.001 1.696.447 3.354 1.298 4.811l-1.053 3.844 3.943-1.033zm11.367-7.374c-.302-.151-1.785-.882-2.062-.982-.277-.1-.479-.151-.68.151s-.781.982-.957 1.183c-.176.201-.352.226-.654.076-.302-.151-1.274-.47-2.426-1.5-.897-.8-1.502-1.79-1.678-2.091-.176-.302-.019-.465.132-.615.136-.135.302-.352.453-.528.151-.176.201-.302.302-.503.101-.201.05-.377-.025-.528-.075-.151-.68-1.636-.932-2.238-.245-.589-.494-.509-.68-.519-.176-.009-.377-.01-.578-.01s-.528.075-.805.377c-.277.302-1.057 1.032-1.057 2.515s1.082 2.918 1.232 3.119c.151.201 2.13 3.253 5.16 4.561.721.311 1.282.497 1.72.637.724.23 1.383.197 1.904.12.581-.086 1.785-.73 2.037-1.435.252-.704.252-1.308.176-1.434-.076-.126-.277-.201-.579-.352z" />
        </svg>
      </a>

      {/* Styling Animations */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default App;
