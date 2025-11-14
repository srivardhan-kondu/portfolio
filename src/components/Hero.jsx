import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center pt-32 pb-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-100 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-50 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-black">Srivardhan Rao</span>
            </h1>

            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              AI & DSA Trainer
            </div>

            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.59a.75.75 0 1 0-1.22-.87l-3.22 4.53-1.56-1.56a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.15-.094l3.66-5.32Z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-lg leading-relaxed">Empowered 12,000+ students across 20+ premier institutions</span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.59a.75.75 0 1 0-1.22-.87l-3.22 4.53-1.56-1.56a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.15-.094l3.66-5.32Z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-lg leading-relaxed">Hands-on AI, ML, and DSA bootcamps with real projects</span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.59a.75.75 0 1 0-1.22-.87l-3.22 4.53-1.56-1.56a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.15-.094l3.66-5.32Z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-lg leading-relaxed">92% placement success through interview-focused training</span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.59a.75.75 0 1 0-1.22-.87l-3.22 4.53-1.56-1.56a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.15-.094l3.66-5.32Z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-lg leading-relaxed">Personalized mentorship and career roadmap guidance</span>
              </li>
            </ul>
          </div>

          {/* Right Side - Professional Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="text-center">
              <div className="w-72 h-72 lg:w-96 lg:h-96 bg-gray-200 rounded-full flex items-center justify-center shadow-2xl border-4 border-white overflow-hidden">
                <img 
                  src="/profile-img.jpg" 
                  alt="Srivardhan Rao" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="text-gray-400 text-6xl">👤</div>';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;