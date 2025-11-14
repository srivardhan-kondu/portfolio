import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-black">About Me</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - About Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  As a dedicated AI & DSA Trainer, I've had the privilege of mentoring over <span className="font-semibold text-black">12,000+ students</span> across <span className="font-semibold text-black">20+ premier institutions</span> throughout India. My journey in education has been driven by a singular mission: transforming theoretical knowledge into practical, career-ready skills.
                </p>

                <p>
                  My teaching methodology combines hands-on project work with real-world problem-solving. Whether it's guiding students through complex Neural Networks achieving 96% accuracy or helping them master Data Structures & Algorithms for top tech placements, I focus on building both technical competence and problem-solving confidence.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Teaching Philosophy</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  At Government Engineering College, Thrissur, I achieved <span className="font-semibold text-black">92% placement outcomes</span> through intensive DSA bootcamps. At Sridevi Women's Engineering College, I mentored 150+ students in AI/ML, focusing on industry-ready projects in NLP and Computer Vision.
                </p>

                <p>
                  Beyond classroom training, I've designed and delivered specialized programs including <span className="font-semibold text-black">Placement Prep Bootcamps</span>, <span className="font-semibold text-black">Code Sprint Labs</span>, and <span className="font-semibold text-black">Mock Interview Platforms</span>. My goal is not just to teach concepts, but to build careers—empowering students with the skills, confidence, and practical experience needed to excel in the competitive tech industry.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Highlights */}
          <div className="space-y-6">
            {/* Key Statistics */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Impact at a Glance</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-black mb-2">12,000+</div>
                  <div className="text-sm text-gray-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black mb-2">20+</div>
                  <div className="text-sm text-gray-600">Institutions</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black mb-2">92%</div>
                  <div className="text-sm text-gray-600">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black mb-2">4+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h3>
              <div className="space-y-3">
                {[
                  'Data Structures & Algorithms',
                  'Artificial Intelligence & Machine Learning',
                  'Neural Networks & Deep Learning',
                  'Natural Language Processing',
                  'Computer Vision',
                  'Python Programming',
                  'Interview Preparation & Coaching',
                  'Project Development & Mentorship'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">My Mission</h3>
              <p className="text-gray-100 leading-relaxed">
                "To bridge the gap between academic learning and industry requirements by providing hands-on, practical training that empowers students to confidently pursue their tech careers."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;