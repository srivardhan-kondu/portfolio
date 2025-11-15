import React from 'react';

const Hero = () => {
  return (
    <section className="h-[70vh] bg-white flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 gap-6 items-center">

          {/* Left */}
          <div className="space-y-4 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
              Hi, I'm <span className="text-black">Srivardhan Rao</span>
            </h1>

            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 px-3 py-1.5 text-sm font-medium max-w-max">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              AI & DSA Trainer
            </div>

            <p className="text-gray-700 text-sm sm:text-base max-w-lg">
              I build logical thinking by simplifying concepts, train students from campus to corporate readiness, and deliver company-wise training modules tailored for service-based firms.
            </p>

            <ul className="grid grid-cols-1 gap-2 text-gray-700 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                •
                <span>Train students from campus to corporate readiness.</span>
              </li>
              <li className="flex items-start gap-3">
                •
                <span>Company-specific training modules for top service-based firms.</span>
              </li>
              <li className="flex items-start gap-3">
                •
                <span>Simplified concept breakdown with hands-on AI/ML & DSA projects.</span>
              </li>
            </ul>

          </div>

          {/* Right - profile image */}
          <div className="flex justify-end">
            <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-gray-200 rounded-full overflow-hidden border-4 border-white shadow-2xl flex items-center justify-center">
              <img
                src="/profile-img.jpg"
                alt="Srivardhan Rao"
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
