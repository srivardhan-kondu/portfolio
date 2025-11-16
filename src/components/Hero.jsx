import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[70vh] bg-white flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">

        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden gap-6">

          {/* Mobile Image */}
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden border-4 border-white shadow-lg flex items-center justify-center">
              <img
                src="/profile-img.jpg"
                alt="Srivardhan Rao"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="text-gray-400 text-5xl">👤</div>';
                }}
              />
            </div>
          </div>

          {/* Mobile Content */}
          <div className="space-y-4 text-left">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              Hi, I'm Srivardhan Rao
            </h1>

            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
              AI & DSA Trainer
            </div>

            <p className="text-gray-700 text-base leading-relaxed">
              I build logical thinking by simplifying concepts and training students for workplace readiness.
            </p>

            <ul className="space-y-3 text-gray-700 text-base">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span>Microsoft Certified and International Computer Vision Competition Participant.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span>Build logical thinking with simplified concepts.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span>Train students for campus to corporate transitions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span>Hands-on learning paths in AI, ML, and DSA.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Desktop Text */}
          <div className="space-y-5">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Hi, I'm Srivardhan Rao
            </h1>

            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              DSA & AI Trainer
            </div>

            <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-xl">
              I build logical thinking by simplifying concepts and training students for workplace readiness.
            </p>

            <ul className="space-y-3 text-gray-700 text-base lg:text-lg">
              
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span>Build logical thinking with simplified concepts.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span>Train students for campus to corporate transitions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span>Hands-on learning paths in AI, ML, and DSA.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span>Microsoft Certified and International Computer Vision Competition Participant.</span>
              </li>
            </ul>
          </div>

          {/* Desktop Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gray-200 rounded-full overflow-hidden border-4 border-white shadow-xl flex items-center justify-center">
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
    </section>
  );
};

export default Hero;
