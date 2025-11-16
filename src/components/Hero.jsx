import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[70vh] bg-white flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Mobile Layout - Stack vertically */}
        <div className="flex flex-col md:hidden gap-6">
          {/* Profile Image - Mobile */}
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

          {/* Content - Mobile */}
          <div className="space-y-4 text-left">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              Hi, I'm Srivardhan Rao
            </h1>

            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
              AI & DSA Trainer
            </div>

            <p className="text-gray-700 text-base leading-relaxed">
              I build logical thinking by simplifying concepts, train students from campus to corporate readiness, and deliver company-wise training modules tailored for service-based firms.
            </p>

            <ul className="space-y-3 text-gray-700 text-base">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span>Train students from campus to corporate readiness.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span>Company-specific training modules for top service-based firms.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span>Simplified concept breakdown with hands-on AI/ML & DSA projects.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Desktop */}
          <div className="space-y-5">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Hi, I'm Srivardhan Rao
            </h1>

            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
              AI & DSA Trainer
            </div>

            <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-xl">
              I build logical thinking by simplifying concepts, train students from campus to corporate readiness, and deliver company-wise training modules tailored for service-based firms.
            </p>

            <ul className="space-y-3 text-gray-700 text-base lg:text-lg">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span>Train students from campus to corporate readiness.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span>Company-specific training modules for top service-based firms.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">•</span>
                <span>Simplified concept breakdown with hands-on AI/ML & DSA projects.</span>
              </li>
            </ul>
          </div>

          {/* Right Profile Image - Desktop */}
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