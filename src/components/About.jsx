import React from 'react';

const stats = [
  { label: 'Students Trained', value: '9,000+' },
  { label: 'Institutions Served', value: '11' },
  { label: 'Placement Rate', value: '92%' },
  { label: 'Years of Experience', value: '3+' }
];

const skills = [
  'Data Structures & Algorithms',
  'AI & Machine Learning',
  'Deep Learning',
  'NLP & Computer Vision',
  'Python Programming',
  'Interview Coaching'
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">About Me</h2>
          <div className="w-16 sm:w-20 h-1 bg-gray-900 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6 flex flex-col items-stretch">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow border border-gray-200 flex flex-col h-full">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">My Story</h3>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg flex-1">
                I empower final-year engineering students to bridge academic learning and industry readiness through focused mentorship in AI, Machine Learning & Data Structures & Algorithms.<br />
                By simplifying complex concepts into actionable insights and sharpening problem-solving skills, I enable students to confidently navigate campus placements and secure roles at top companies.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow border border-gray-200 flex flex-col h-full">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Core Strengths</h3>
              <ul className="space-y-2 text-gray-700 flex-1">
                {skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gray-900 rounded-full flex-shrink-0"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 flex flex-col items-stretch">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow border border-gray-200 flex flex-col h-full">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-5">Impact at a Glance</h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-center flex-1">
                {stats.map((s, idx) => (
                  <div key={idx}>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">{s.value}</div>
                    <div className="text-sm sm:text-base text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow border border-gray-200 flex flex-col h-full">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Mission</h3>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg flex-1">
                Bridge academic learning and industry demands through hands-on training, clear milestones and interview practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
