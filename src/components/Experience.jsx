import React from 'react';
import { Briefcase, Users, Code, Award, Sparkles, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const institutions = [
    {
      name: "CMR College of Engineering",
      location: "Hyderabad, Telangana",
      duration: "2025 - Present",
      mode: "Offline",
      description: "Comprehensive AI & DSA sessions with curriculum rollout in progress, featuring weekly hands-on labs and interview prep modules.",
      achievements: [
        "Weekly hands-on laboratory sessions",
        "Interview preparation modules",
        "Real-time problem-solving sessions",
        "Industry-focused project development"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1Eq3px5t6G1qct7M5e9Yf0fzTWxN3BIr5WJfUkPhg-kw/edit?usp=sharing",
      icon: Code,
      color: "bg-gray-900",
      status: "ongoing"
    },
    {
      name: "Hyderabad Institute of Technology and Management",
      location: "Hyderabad, Telangana",
      duration: "2025 - Present",
      mode: "Offline",
      description: "Focused AI & DSA sessions with weekly problem-solving sprints and project showcase reviews.",
      achievements: [
        "Training students in 3 cycles",
        "Weekly problem-solving sprint sessions",
        "Building strong programming fundamentals",
        "Regular project showcase and reviews",
        "Comprehensive skill development program"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1kNm5q6Hiyvz2VbuYpHL4Sn80iacuqR4AEbgErq-fHvQ/edit?usp=sharing",
      icon: Code,
      color: "bg-gray-700",
      status: "ongoing"
    },
    {
      name: "Annamacharya Institute of Technology & Sciences",
      location: "Kadapa, India",
      duration: "2025",
      mode: "Offline",
      description: "AI and DSA workshops combining theoretical concepts with practical implementations.",
      achievements: [
        "Conducted comprehensive AI workshops",
        "Taught advanced DSA concepts",
        "Systematic curriculum from basics to advanced",
        "Real-world problem-solving sessions"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1AJBsRJijZZpowg91a60r-b8I9vqJBfCxTO7KDMiVOB8/edit?usp=sharing",
      icon: Users,
      color: "bg-gray-800",
      status: "completed"
    },
    {
      name: "Vignan's Institute of Information Technology",
      location: "Visakhapatnam, India",
      duration: "2025",
      mode: "Offline",
      description: "Project mentorship for AI and DSA applications including image classification and search optimization.",
      achievements: [
        "Trained students for Hack WITH INFI 2025",
        "Placed 12 students in Infosys at package of 9LPA through Hack WITH INFI 2025",
        "Guided search optimization using DSA techniques",
        "Built complete project pipelines from scratch"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1f9DmDb7FjGgj26nRXZv9MibW3MmDCnLZrNKnec2qBPQ/edit?usp=sharing",
      icon: Briefcase,
      color: "bg-gray-700",
      status: "completed"
    },
    {
      name: "Government Engineering College, Thrissur",
      location: "Kerala, India",
      duration: "2024",
      mode: "Offline",
      description: "Intensive DSA bootcamp focusing on placement preparation with algorithmic problem-solving and competitive programming.",
      achievements: [
        "Achieved 92% placement success rate",
        "Trained 200+ students in core DSA concepts",
        "Conducted mock interviews and coding assessments",
        "Prepared students for top tech company placements"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1Eq3px5t6G1qct7M5e9Yf0fzTWxN3BIr5WJfUkPhg-kw/edit?usp=sharing",
      icon: Award,
      color: "bg-gray-800",
      status: "completed"
    },
    {
      name: "Sridevi Women's Engineering College",
      location: "Hyderabad, India",
      duration: "2024",
      mode: "Offline",
      description: "AI/ML mentorship program focusing on advanced DSA with hands-on industry-ready projects.",
      achievements: [
        "Mentored 150+ B.Tech students in advanced DSA",
        "Guided projects in NLP and Computer Vision",
        "Industry-ready project implementations",
        "Built end-to-end ML pipelines"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1s76hGVPFQ72PBkwT-42B2JpNUzTFlF-aQPWJNYSttdg/edit?usp=sharing",
      icon: Sparkles,
      color: "bg-gray-700",
      status: "completed"
    },
    {
      name: "Ballari Institute of Technology & Management",
      location: "Karnataka, India",
      duration: "2024",
      mode: "Offline",
      description: "Foundation course in Python programming and basic DSA for engineering students.",
      achievements: [
        "Taught Python fundamentals and syntax",
        "Introduced basic data structures and algorithms",
        "Hands-on coding exercises and projects",
        "Problem-solving skill development"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1JJHL8zGMclbCJHMp1w3JjxAKeLsVKytyV2F8epoelNE/edit?usp=sharing",
      icon: Code,
      color: "bg-gray-900",
      status: "completed"
    },
    {
      name: "SR University",
      location: "Warangal, India",
      duration: "2023 - 2024",
      mode: "Online",
      description: "Research-focused training in DSA and AI tools for academic projects and publications.",
      achievements: [
        "Trained students in DSA for research applications",
        "Guided use of AI tools in research projects",
        "Supported academic paper development",
        "Enhanced research methodology skills"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1_M0vlZP0IU1JHMepAAl-HqmsUmUGsFlxHXCjoek8CVM/edit?usp=sharing",
      icon: Calendar,
      color: "bg-gray-900",
      status: "completed"
    },
    {
      name: "Kakatiya Institute of Technology & Science (KITS)",
      location: "Warangal, Telangana",
      duration: "2023 - 2024",
      mode: "Offline",
      description: "Logic-building bootcamp focused on algorithmic thinking and problem-solving fundamentals.",
      achievements: [
        "Led intensive logic-building sessions",
        "Enhanced algorithmic thinking skills",
        "Prepared students for competitive programming",
        "Improved problem-solving confidence"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1BhW4DIWmbtkE1zQw_-Og12uwy5PIBVZEr1r9zIKlY98/edit?usp=sharing",
      icon: Code,
      color: "bg-gray-800",
      status: "completed"
    },
    {
      name: "MVSR Engineering College",
      location: "Hyderabad, Telangana",
      duration: "2023",
      mode: "Offline",
      description: "DSA and AI fundamentals course with hands-on projects and real-world applications.",
      achievements: [
        "Trained students in DSA fundamentals in 4 cycles",
        "Transformed understanding of neural networks",
        "End-to-end project development experience",
        "Industry-relevant implementation techniques"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1pQ7WNaN6ucvKak2yH6ALGYEvXqV0nFZdiyEDdi7FH10/edit?usp=sharing",
      icon: Sparkles,
      color: "bg-gray-800",
      status: "completed"
    }
  ];

  const mentorshipProjects = [
    {
      title: "Coding Mentor at Newbie Learning",
      duration: "2022",
      description: "Trained 100+ students in sorting, recursion, greedy, DP, trees, and graphs using Python",
      icon: Sparkles,
      color: "bg-gray-900",
      titleLink: null,
      descriptionLink: null
    },
    {
      title: "Guest Speaker at Osmania University",
      duration: "2023",
      description: "Led workshop for research scholars on AI in academics and research",
      icon: Code,
      color: "bg-gray-800",
      titleLink: "https://www.linkedin.com/posts/kondu-srivardhan-7001a1252_genrativeai-activity-7114212061936566272-J996",
      descriptionLink: null
    },
    {
      title: "DSA Crash Course",
      duration: "2023",
      description: "Trained 1400+ students in DSA online mode in association with ",
      descriptionSuffix: "RICR",
      icon: Briefcase,
      color: "bg-gray-700",
      titleLink: null,
      descriptionLink: "https://ricr.in/"
    },
    {
      title: "Mock Interviews",
      duration: "2023",
      description: "Conducted mock interviews with industry experts for technical and HR rounds that resulted in 97% conversion rate",
      icon: Users,
      color: "bg-gray-900",
      titleLink: null,
      descriptionLink: null
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Training Experience & Projects
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive training delivered across premier institutions and hands-on mentorship projects designed to build real skills and career readiness.
          </p>
        </div>

        {/* Institution Training Cards */}
        <div className="space-y-6 mb-12">
          {institutions.map((inst, idx) => (
            <div key={idx} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
              {/* Mobile Layout */}
              <div className="block md:hidden">
                {/* Icon and Status Badge - Mobile */}
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gray-900 p-4 rounded-2xl flex-shrink-0">
                    <inst.icon className="text-white" size={28} strokeWidth={2} />
                  </div>
                  <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${
                    inst.status === 'ongoing'
                      ? 'bg-amber-50 text-amber-700 border border-amber-200'
                      : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  }`}>
                    <span className={`h-2 w-2 rounded-full ${
                      inst.status === 'ongoing'
                        ? 'bg-amber-500'
                        : 'bg-emerald-500'
                    }`}></span>
                    {inst.status === 'ongoing' ? 'In Progress' : 'Completed'}
                  </span>
                </div>

                {/* Content - Mobile */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{inst.name}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {inst.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {inst.duration}
                    </span>
                    <span>•</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      inst.mode === 'Online'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {inst.mode}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base mb-4">{inst.description}</p>

                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2.5 mb-6">
                    {inst.achievements.map((ach, ai) => (
                      <li key={ai} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={inst.feedbackLink} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-all duration-300 shadow-md">
                    View Student Feedback
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:block">
                {/* Status Badge - Desktop */}
                <div className="flex justify-end mb-4">
                  <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${
                    inst.status === 'ongoing'
                      ? 'bg-amber-50 text-amber-700 border border-amber-200'
                      : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  }`}>
                    <span className={`h-2 w-2 rounded-full ${
                      inst.status === 'ongoing'
                        ? 'bg-amber-500'
                        : 'bg-emerald-500'
                    }`}></span>
                    {inst.status === 'ongoing' ? 'In Progress' : 'Completed'}
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gray-900 p-3 rounded-xl flex-shrink-0">
                    <inst.icon className="text-white" size={24} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{inst.name}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {inst.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {inst.duration}
                      </span>
                      <span>•</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        inst.mode === 'Online'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {inst.mode}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base">{inst.description}</p>
                  </div>
                </div>

                <div className="ml-16 space-y-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {inst.achievements.map((ach, ai) => (
                      <li key={ai} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{ach}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-end pt-2">
                    <a href={inst.feedbackLink} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg">
                      View Student Feedback
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mentorship Projects */}
        <div className="grid sm:grid-cols-2 gap-6">
          {mentorshipProjects.map((proj, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className={`${proj.color} p-3 rounded-xl flex-shrink-0`}>
                  <proj.icon className="text-white" size={22} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  {proj.titleLink ? (
                    <a 
                      href={proj.titleLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-gray-900 hover:text-blue-600 hover:underline transition-colors"
                    >
                      {proj.title}
                    </a>
                  ) : (
                    <h4 className="text-lg font-bold text-gray-900">{proj.title}</h4>
                  )}
                  <p className="text-xs text-gray-500 font-medium">{proj.duration}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                {proj.description}
                {proj.descriptionLink && proj.descriptionSuffix && (
                  <a 
                    href={proj.descriptionLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors"
                  >
                    {proj.descriptionSuffix}
                  </a>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;