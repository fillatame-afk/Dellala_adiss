
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-slate-100">
          {/* Info Side */}
          <div className="lg:w-2/5 bg-emerald-900 p-10 lg:p-16 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold font-serif mb-6">Contact Us Today</h2>
              <p className="text-emerald-100/80 mb-12 max-w-sm">
                Ready to find your next property? Our agents are standing by to assist you in your search.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-emerald-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.143-7.143c-.149-.441.017-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-xl font-bold">+251 911 123 456</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-emerald-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                    <p className="text-xl font-bold">info@dellalaadiss.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-emerald-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                    <p className="text-xl font-bold">Bole, Addis Ababa</p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <a
                  href="https://wa.me/251911123456"
                  target="_blank"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black rounded-2xl transition-all shadow-xl shadow-emerald-950/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.139c1.52.907 3.0 1.384 4.595 1.385 5.363 0 9.724-4.362 9.726-9.727.001-2.601-1.012-5.045-2.852-6.887-1.84-1.841-4.283-2.855-6.882-2.855-5.366 0-9.728 4.362-9.73 9.727-.001 1.696.447 3.354 1.298 4.811l-1.053 3.844 3.943-1.033zm11.367-7.374c-.302-.151-1.785-.882-2.062-.982-.277-.1-.479-.151-.68.151s-.781.982-.957 1.183c-.176.201-.352.226-.654.076-.302-.151-1.274-.47-2.426-1.5-.897-.8-1.502-1.79-1.678-2.091-.176-.302-.019-.465.132-.615.136-.135.302-.352.453-.528.151-.176.201-.302.302-.503.101-.201.05-.377-.025-.528-.075-.151-.68-1.636-.932-2.238-.245-.589-.494-.509-.68-.519-.176-.009-.377-.01-.578-.01s-.528.075-.805.377c-.277.302-1.057 1.032-1.057 2.515s1.082 2.918 1.232 3.119c.151.201 2.13 3.253 5.16 4.561.721.311 1.282.497 1.72.637.724.23 1.383.197 1.904.12.581-.086 1.785-.73 2.037-1.435.252-.704.252-1.308.176-1.434-.076-.126-.277-.201-.579-.352z" />
                  </svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>

            {/* Decorative Bg Circles */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-10 lg:p-16">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@email.com"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+251 ..."
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Property Type Interested</label>
                <select className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-50 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat">
                  <option>Rent - Apartment</option>
                  <option>Rent - Commercial Space</option>
                  <option>Buy - Villa</option>
                  <option>Buy - Apartment</option>
                  <option>Buy - Land/Commercial</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-50 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-emerald-900 hover:bg-emerald-950 text-white font-bold rounded-xl transition-all shadow-xl shadow-emerald-900/10 transform active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2">
          <div className="h-[400px] w-full bg-slate-100 relative group">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000"
              alt="Map location of Addis Ababa"
              className="w-full h-full object-cover brightness-90 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 flex flex-col items-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center animate-pulse mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-slate-900">Our Office</h4>
                <p className="text-slate-500 text-sm">Bole Medhanialem, Addis Ababa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
