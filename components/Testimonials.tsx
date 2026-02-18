
import React from 'react';
import { TESTIMONIALS } from '../constants.tsx';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4 block">Social Proof</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl relative">
              <div className="absolute -top-6 left-8 bg-emerald-600 p-3 rounded-2xl shadow-xl shadow-emerald-900/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-white" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V5C14.017 4.44772 14.4647 4 15.017 4H19.017C20.6739 4 22.017 5.34315 22.017 7V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697C8.56925 16 9.01697 15.5523 9.01697 15V9C9.01697 8.44772 8.56925 8 8.01697 8H4.01697C3.46468 8 3.01697 7.55228 3.01697 7V5C3.01697 4.44772 3.46468 4 4.01697 4H8.01697C9.67382 4 11.017 5.34315 11.017 7V15C11.017 18.3137 8.33067 21 5.01697 21H3.01697Z" />
                </svg>
              </div>

              <p className="text-slate-300 italic mb-8 pt-4 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/30"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
