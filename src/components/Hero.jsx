import React from 'react';

const Hero = () => {
  return (
   <section className="h-[70vh] bg-white flex items-center justify-center pt-20 pb-10 relative overflow-hidden">

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Always two columns */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 items-center">

          {/* Left Content */}
          <div className="space-y-4 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
              Hi, I'm <span className="text-black">Srivardhan Rao</span>
            </h1>

            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 px-3 py-1.5 text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              AI & DSA Trainer
            </div>

            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">

              <li className="flex gap-2 items-start">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-white flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.59a.75.75 0 1 0-1.22-.87l-3.22 4.53-1.56-1.56a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.15-.094l3.66-5.32Z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Empowered 12,000+ students across 20+ premier institutions</span>
              </li>

              <li className="flex gap-2 items-start">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-white flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.59a.75.75 0 1 0-1.22-.87l-3.22 4.53-1.56-1.56a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.15-.094l3.66-5.32Z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Hands-on AI, ML, and DSA bootcamps with real projects</span>
              </li>

              <li className="flex gap-2 items-start">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-white flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.59a.75.75 0 1 0-1.22-.87l-3.22 4.53-1.56-1.56a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.15-.094l3.66-5.32Z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>92% placement success through interview-focused training</span>
              </li>

              <li className="flex gap-2 items-start">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-white flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.59a.75.75 0 1 0-1.22-.87l-3.22 4.53-1.56-1.56a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.15-.094l3.66-5.32Z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Personalized mentorship and career roadmap guidance</span>
              </li>

            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-end">
            <div className="w-24 h-24 sm:w-36 sm:h-36 lg:w-64 lg:h-64 bg-gray-200 rounded-full overflow-hidden border-4 border-white shadow-2xl flex items-center justify-center">
              <img
                src="/profile-img.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="text-gray-400 text-4xl">👤</div>';
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
