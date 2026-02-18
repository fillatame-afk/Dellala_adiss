
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=2000"
          alt="Addis Ababa Skyline"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-emerald-600/20 backdrop-blur-md border border-emerald-500/30 rounded-full text-emerald-300">
            Addis Ababa's Trusted Broker
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-6">
            Find Your Perfect <br />
            <span className="text-emerald-400">Home in Addis</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-lg leading-relaxed">
            Discover a wide range of high-end properties from luxury apartments in Bole to family villas in CMC. Professional service you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#properties"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:-translate-y-1 shadow-2xl shadow-emerald-900/40 text-center"
            >
              Browse Properties
            </a>
            <a
              href="#contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-bold transition-all text-center"
            >
              Contact Agent
            </a>
          </div>
        </div>
      </div>

      {/* Floating Badge (Trust Indicator) */}
      <div className="absolute bottom-12 right-8 hidden lg:block bg-white/90 backdrop-blur p-4 rounded-2xl shadow-2xl animate-bounce-slow">
        <div className="flex items-center space-x-3">
          <div className="bg-emerald-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-emerald-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21a3.745 3.745 0 01-3.296-1.593 3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Verified Broker</p>
            <p className="text-slate-900 font-bold">100+ Satisfied Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
