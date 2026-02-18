
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-2">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                alt="Modern Office"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-emerald-50 rounded-full -z-10 blur-3xl"></div>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-100 rounded-full -z-10 blur-2xl"></div>

            <div className="absolute bottom-8 right-8 bg-emerald-900 text-white p-6 rounded-2xl shadow-2xl z-20 max-w-[240px]">
              <p className="text-4xl font-bold mb-1">10+</p>
              <p className="text-emerald-300 text-sm font-semibold uppercase tracking-widest">Years Experience</p>
              <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                Expert knowledge of the Addis Ababa real estate market.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">About Dellala_adiss</span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-8 leading-tight">
              Addis Ababa's Most Trusted <br /> Real Estate Partner
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Dellala_adiss is a premium real estate brokerage in Addis Ababa helping families and businesses find the right property with transparency and professionalism. We understand that finding a home is more than just a transaction—it's about finding your place in our growing city.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Our team combines deep local market expertise with international service standards. Whether you are looking for a luxury penthouse in Bole or a strategic office in Kazanchis, we are here to guide you every step of the way.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-emerald-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18.5" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-slate-900">Local Expertise</h4>
                </div>
                <p className="text-sm text-slate-500">Deep knowledge of every neighborhood from Ayat to Sarbet.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-emerald-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6.119c0 3.842 1.637 7.338 4.281 9.827a11.99 11.99 0 0016.242-1.295A11.95 11.95 0 0112 2.714z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-slate-900">Full Transparency</h4>
                </div>
                <p className="text-sm text-slate-500">No hidden costs. We ensure legal compliance and fair pricing.</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-900 hover:bg-emerald-950 text-white font-bold rounded-xl transition-all shadow-xl shadow-emerald-900/10"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
