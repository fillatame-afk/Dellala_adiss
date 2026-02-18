
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="flex items-center space-x-2">
              <span className="text-2xl font-bold font-serif text-white">
                Dellala<span className="text-emerald-500">_adiss</span>
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Premium real estate brokerage specializing in luxury rentals and sales across Addis Ababa. Helping you find your perfect home with integrity and expertise.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-all transform hover:-translate-y-1"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-white/20 rounded"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-emerald-500 pl-4">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#properties" className="text-slate-400 hover:text-emerald-400 transition-colors">Properties</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-slate-400 hover:text-emerald-400 transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Popular Neighborhoods */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-emerald-500 pl-4">Neighborhoods</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Bole District</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Kazanchis / CBD</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">CMC Residential</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Ayat Real Estate</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Old Airport / Sarbet</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-emerald-500 pl-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-emerald-500 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-slate-400">Bole Medhanialem, Cape Verde St.<br />Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-emerald-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035(0 01-7.143-7.143c-.149-.441.017-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="text-slate-400">+251 911 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-emerald-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-slate-400">info@dellalaadiss.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Dellala_adiss. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
